const CONTACT_PHONE = '608902070, 777033307';
const CONTACT_EMAIL = 'info@musettishop.cz';

export type SourceProductDetail = {
  title?: string;
  lead?: string;
  manufacturer?: string;
  productCode?: string;
  stockLabel?: string;
  shippingLabel?: string;
  descriptionHtml?: string;
  introTitle?: string;
  introSubtitle?: string;
  highlightLines: string[];
  bodyParagraphs: string[];
  specs: Array<{
    label: string;
    value: string;
  }>;
  galleryImages: string[];
  contact: {
    phone: string;
    email: string;
    quickContactLabel: string;
  };
};

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeDescriptionHtml(html: string) {
  let sanitized = html;

  sanitized = sanitized.replace(/<script[\s\S]*?<\/script>/gi, '');
  sanitized = sanitized.replace(/<style[\s\S]*?<\/style>/gi, '');
  sanitized = sanitized.replace(
    /\s(?:class|style|id|aria-[a-z-]+|data-[a-z-]+|target|rel)(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi,
    '',
  );
  sanitized = sanitized.replace(/<a [^>]*href="[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, '$1');
  sanitized = sanitized.replace(/<span[^>]*>/gi, '');
  sanitized = sanitized.replace(/<\/span>/gi, '');
  sanitized = sanitized.replace(/<br\s*\/?>/gi, '<br />');

  return sanitized.trim();
}

function getMatch(content: string, pattern: RegExp) {
  const match = content.match(pattern);
  return match?.[1]?.trim();
}

function getMatches(content: string, pattern: RegExp) {
  return Array.from(content.matchAll(pattern)).map((match) => match[1]).filter(Boolean);
}

function extractParagraphText(descriptionHtml: string) {
  return getMatches(descriptionHtml, /<p>([\s\S]*?)<\/p>/gi).map((paragraph) => stripTags(paragraph));
}

function parseDescriptionContent(descriptionHtml: string) {
  const paragraphs = extractParagraphText(descriptionHtml).filter(Boolean);
  const introTitle =
    paragraphs[0] && paragraphs[0].length <= 90 && !paragraphs[0].includes(':') ? paragraphs[0] : undefined;
  const introSubtitle =
    paragraphs[1] && paragraphs[1].length <= 120 && !paragraphs[1].includes(':') ? paragraphs[1] : undefined;
  const highlightLines: string[] = [];
  const bodyParagraphs: string[] = [];
  const specs: Array<{ label: string; value: string }> = [];

  for (const [index, paragraph] of paragraphs.entries()) {
    const normalized = paragraph.replace(/\s+/g, ' ').trim();

    if (index === 0 && normalized === introTitle) {
      continue;
    }

    if (index === 1 && normalized === introSubtitle) {
      continue;
    }

    const specMatch = normalized.match(/^([^:]{2,80})\s*:\s*(.+)$/);

    if (specMatch) {
      specs.push({
        label: specMatch[1].trim(),
        value: specMatch[2].trim(),
      });
    } else if (normalized.length <= 72 && bodyParagraphs.length === 0) {
      highlightLines.push(normalized);
    } else {
      bodyParagraphs.push(normalized);
    }
  }

  return { introTitle, introSubtitle, highlightLines, bodyParagraphs, specs };
}

export async function getSourceProductDetail(sourceUrl: string): Promise<SourceProductDetail> {
  try {
    const response = await fetch(sourceUrl, {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch source product detail: ${response.status}`);
    }

    const html = await response.text();

    const title =
      getMatch(html, /<span class="h1AddVariant">([\s\S]*?)<\/span>/i) ??
      getMatch(html, /<title>([\s\S]*?)<\/title>/i);

    const lead = stripTags(
      getMatch(html, /<p itemprop="disambiguatingDescription"[^>]*>([\s\S]*?)<\/p>/i) ?? '',
    );

    const manufacturer = stripTags(
      getMatch(
        html,
        /<span class="mr-2 pr-2 bo-r-s-1 d-inline-block desc-info pd-mf-name">[\s\S]*?<a [^>]*class="desc-info">([\s\S]*?)<\/a><\/span>/i,
      ) ?? '',
    );

    const productCode = stripTags(
      getMatch(
        html,
        /<span class="d-inline-block mr-2 pr-2 bo-r-s-1 desc-info pd-code">[\s\S]*?Kód produktu:<\/span>\s*([^<\s][\s\S]*?)<\/span>/i,
      ) ?? '',
    );

    const stockLabel =
      stripTags(getMatch(html, /<span class="AvailabilityLabel[^"]*"[^>]*>([\s\S]*?)<\/span>/i) ?? '') ||
      (html.includes('>Skladem<') ? 'Skladem' : '');

    const shippingLabel = stripTags(
      getMatch(
        html,
        /<span class="mr-2 pr-2 d-inline-block bo-r-s-1 desc-info pd-shipping-link"><a [^>]*>([\s\S]*?)<\/a><\/span>/i,
      ) ?? '',
    );

    const descriptionHtml = sanitizeDescriptionHtml(
      getMatch(
        html,
        /<div id="description" class="tab-pane[\s\S]*?" itemprop="description">([\s\S]*?)<div class="clearfix"><\/div>/i,
      ) ?? `<p>${escapeHtml(lead)}</p>`,
    );
    const { introTitle, introSubtitle, highlightLines, bodyParagraphs, specs } =
      parseDescriptionContent(descriptionHtml);

    const galleryImages = Array.from(
      new Set(
        getMatches(html, /data-lb-url="([^"]+)"/gi)
          .map((url) => decodeHtmlEntities(url))
          .filter((url) => url.startsWith('http')),
      ),
    );

    return {
      title: title ? decodeHtmlEntities(stripTags(title)) : undefined,
      lead: lead || undefined,
      manufacturer: manufacturer || undefined,
      productCode: productCode || undefined,
      stockLabel: stockLabel || undefined,
      shippingLabel: shippingLabel || undefined,
      descriptionHtml,
      introTitle,
      introSubtitle,
      highlightLines,
      bodyParagraphs,
      specs,
      galleryImages,
      contact: {
        phone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        quickContactLabel: 'Rychlý kontakt',
      },
    };
  } catch (error) {
    console.error('Unable to load source product detail', { sourceUrl, error });
    return {
      introTitle: undefined,
      introSubtitle: undefined,
      highlightLines: [],
      bodyParagraphs: [],
      specs: [],
      galleryImages: [],
      contact: {
        phone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        quickContactLabel: 'Rychlý kontakt',
      },
    };
  }
}

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = '/Volumes/CODEX_DISK/apps/Eshop';
const OUTPUT_FILE = path.join(ROOT, 'src/data/generatedCatalog.ts');

const SOURCE_BASE_URL = 'https://musettishop.com/en-eu';
const DAILY_RATE_URL =
  'https://www.cnb.cz/en/financial_markets/foreign_exchange_market/exchange_rate_fixing/daily.txt';

const FEATURED_CATEGORY_HANDLES = new Set([
  'caffe-in-grani',
  'capsule-compatibili-nespresso',
  'cialde-compostabili',
  'caffe-macinato',
]);

const ALLOWED_CATEGORY_HANDLES = new Set([
  'caffe-in-grani',
  'capsule-compatibili-nespresso',
  'cialde-compostabili',
  'caffe-macinato',
  'capsule-compatibili-lavazza-a-modo-mio',
  'capsule-compatibili-nescafe-dolce-gusto',
  'te-e-infusi',
  'cioccolate-calde',
  'prodotti-gourmet',
  'biscotti',
  'cioccolatini',
  'macchine-da-caffe',
  'macchine-caffe-delonghi',
  'tazzine-e-accessori',
  'easter',
  'panettoni-bonfissuto',
  'pasqua-bonfissuto',
  'pasqua-sal-de-riso',
  'sal-de-riso',
  'bagai',
  'zaba',
  'buoni-regalo',
  'nuove-miscele',
  'panettoni-musetti',
  'offerte',
]);

const CATEGORY_OVERRIDES = {
  'caffe-in-grani': {
    slug: 'zrnkova-kava',
    label: 'Zrnková káva',
    headline: 'Klasické balení pro espresso i každodenní domácí přípravu.',
    description:
      'Kompletní výběr zrnkové kávy Musetti od základních směsí po výběrové speciality a limitované edice.',
    audience: 'Pro domácí espresso, kanceláře i provozy, kde je důležitá jistota výsledku a práce s čerstvým zrnem.',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
    benefits: ['Espresso', '1 kg i speciality', 'Klasické i výběrové řady'],
  },
  'capsule-compatibili-nespresso': {
    slug: 'kapsle-nespresso',
    label: 'Kapsle Nespresso',
    headline: 'Recyklovatelné kapsle s rychlou volbou podle typu směsi.',
    description:
      'Kompatibilní kapsle pro Nespresso systém s jasným členěním podle chuťového profilu a intenzity.',
    audience: 'Pro rychlou přípravu doma i v kanceláři bez kompromisu v orientaci ani chuti.',
    accent: '#8a6b59',
    panelClassName: 'from-[#fffaf5] via-[#fffdf9] to-[#efe4d7]',
    benefits: ['Kompatibilní', 'Rychlá orientace', 'Recyklovatelný formát'],
  },
  'cialde-compostabili': {
    slug: 'pody',
    label: 'Pody',
    headline: 'Kompostovatelné pody pro jednoduchý, čistý a rychlý servis.',
    description:
      'Papírové kompostovatelné pody Musetti pro domácí i profesionální použití s důrazem na jednoduchost obsluhy.',
    audience: 'Pro provozy i domácnosti, kde dává smysl čistá manipulace a udržitelnější formát.',
    accent: '#79886e',
    panelClassName: 'from-[#f7fbf4] via-[#fcfdf9] to-[#e5eedc]',
    benefits: ['Kompostovatelné', 'Čistá příprava', 'Více balení'],
  },
  'caffe-macinato': {
    slug: 'mleta-kava',
    label: 'Mletá káva',
    headline: 'Menší balení pro moka konvičku, domácí rytmus a rychlou volbu.',
    description:
      'Mletá káva Musetti pro moka konvičku i každodenní domácí přípravu, od klasických směsí po charakterové řady.',
    audience: 'Pro zákazníky, kteří chtějí rychlý vstup do značky a předem připravenou mletou variantu.',
    accent: '#486a3f',
    panelClassName: 'from-[#f7faf5] via-[#fcfdf9] to-[#dce9d7]',
    benefits: ['Moka', 'Domácí rytmus', 'Menší balení'],
  },
  'capsule-compatibili-lavazza-a-modo-mio': {
    slug: 'kapsle-lavazza-a-modo-mio',
    label: 'Kapsle Lavazza A Modo Mio',
    accent: '#8a6b59',
    panelClassName: 'from-[#fffaf5] via-[#fffdf9] to-[#efe4d7]',
  },
  'capsule-compatibili-nescafe-dolce-gusto': {
    slug: 'kapsle-dolce-gusto',
    label: 'Kapsle Dolce Gusto',
    accent: '#8a6b59',
    panelClassName: 'from-[#fffaf5] via-[#fffdf9] to-[#efe4d7]',
  },
  'te-e-infusi': {
    slug: 'caje-a-napoje',
    label: 'Čaje a nápoje',
    accent: '#6d7e57',
    panelClassName: 'from-[#f7fbf4] via-[#fcfdf9] to-[#e3efdc]',
  },
  'cioccolate-calde': {
    slug: 'horka-cokolada',
    label: 'Horká čokoláda',
    accent: '#8b5e4d',
    panelClassName: 'from-[#fff8f5] via-[#fffdfb] to-[#efe0d7]',
  },
  'prodotti-gourmet': {
    slug: 'gourmet-produkty',
    label: 'Gourmet produkty',
    accent: '#9c6b48',
    panelClassName: 'from-[#fff9f4] via-[#fffdfa] to-[#f3e5d8]',
  },
  biscotti: {
    slug: 'susenky-a-biskoty',
    label: 'Sušenky a biskoty',
    accent: '#9c6b48',
    panelClassName: 'from-[#fff9f4] via-[#fffdfa] to-[#f3e5d8]',
  },
  cioccolatini: {
    slug: 'cokolady-a-sladkosti',
    label: 'Čokolády a sladkosti',
    accent: '#946554',
    panelClassName: 'from-[#fff9f6] via-[#fffdfb] to-[#f1e1d8]',
  },
  'macchine-da-caffe': {
    slug: 'kavovary',
    label: 'Kávovary',
    accent: '#6f7688',
    panelClassName: 'from-[#f7f8fb] via-[#fbfcfd] to-[#e2e6ef]',
  },
  'macchine-caffe-delonghi': {
    slug: 'kavovary-delonghi',
    label: 'Kávovary DeLonghi',
    accent: '#6f7688',
    panelClassName: 'from-[#f7f8fb] via-[#fbfcfd] to-[#e2e6ef]',
  },
  'tazzine-e-accessori': {
    slug: 'salky-a-doplnky',
    label: 'Šálky a doplňky',
    accent: '#7d6f6b',
    panelClassName: 'from-[#fbf9f8] via-[#fdfdfd] to-[#ebe5e2]',
  },
  easter: {
    slug: 'velikonoce',
    label: 'Velikonoce',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
  },
  'panettoni-bonfissuto': {
    slug: 'bonfissuto',
    label: 'Bonfissuto',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
  },
  'pasqua-bonfissuto': {
    slug: 'bonfissuto-velikonoce',
    label: 'Bonfissuto Velikonoce',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
  },
  'pasqua-sal-de-riso': {
    slug: 'velikonocni-sal-de-riso',
    label: 'Velikonoční Sal De Riso',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
  },
  'sal-de-riso': {
    slug: 'sal-de-riso',
    label: 'Sal De Riso',
    accent: '#9c6b48',
    panelClassName: 'from-[#fff9f4] via-[#fffdfa] to-[#f3e5d8]',
  },
  'panettoni-musetti': {
    slug: 'panettoni-a-pandoro-musetti',
    label: 'Panettoni a Pandoro Musetti',
    accent: '#9c6b48',
    panelClassName: 'from-[#fff9f4] via-[#fffdfa] to-[#f3e5d8]',
  },
  'buoni-regalo': {
    slug: 'darkove-karty',
    label: 'Dárkové karty',
    accent: '#8b5e4d',
    panelClassName: 'from-[#fff8f5] via-[#fffdfb] to-[#efe0d7]',
  },
  'nuove-miscele': {
    slug: 'nove-smesi',
    label: 'Nové směsi',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
  },
  offerte: {
    slug: 'akcni-nabidky',
    label: 'Akční nabídky',
    accent: '#b86f92',
    panelClassName: 'from-[#fff7fb] via-[#fff9fc] to-[#f5e0ea]',
  },
};

const TEXT_OVERRIDES = {
  Coffee: 'Káva',
  'Coffee beans': 'Zrnková káva',
  'Grinded coffee': 'Mletá káva',
  'Compostable pods': 'Kompostovatelné pody',
  'Nespresso compatible capsules': 'Kapsle kompatibilní s Nespresso',
  'Lavazza A Modo Mio compatible capsules': 'Kapsle kompatibilní s Lavazza A Modo Mio',
  'Nescafé Dolce Gusto compatible capsules': 'Kapsle kompatibilní s Dolce Gusto',
  'Tea and infusions': 'Čaje a nálevy',
  'Hot chocolates': 'Horké čokolády',
  'Gourmet products': 'Gourmet produkty',
  Biscuits: 'Sušenky a biskoty',
  'Chocolates and sweets': 'Čokolády a sladkosti',
  'Coffee machines': 'Kávovary',
  "De'Longhi Coffee Machines": 'Kávovary DeLonghi',
  'Cups and accessories': 'Šálky a doplňky',
  Easter: 'Velikonoce',
  'Gift Card Musetti': 'Dárková karta Musetti',
  Bagai: 'Bagai',
  Zaba: 'Zaba',
  Offers: 'Akční nabídky',
};

const translationCache = new Map();

function escapeTs(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function stripTags(value) {
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(div|section|article|h1|h2|h3|h4|h5|h6|ul|ol)>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<li>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function splitParagraphs(bodyHtml) {
  return stripTags(bodyHtml)
    .split(/\n{1,}/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function priceToCzkLabel(value) {
  return `${new Intl.NumberFormat('cs-CZ').format(value)} Kč`;
}

function inferVariants(product) {
  const variantTitles = product.variants
    .map((variant) => variant.title?.trim())
    .filter((title) => title && title.toLowerCase() !== 'default title');

  if (variantTitles.length > 0) {
    return Array.from(new Set(variantTitles));
  }

  const grams = product.variants
    .map((variant) => Number(variant.grams || 0))
    .filter(Boolean)
    .map((grams) => {
      if (grams >= 1000 && grams % 1000 === 0) {
        return `${grams / 1000} kg`;
      }

      return `${grams} g`;
    });

  if (grams.length > 0) {
    return Array.from(new Set(grams));
  }

  return ['Detail'];
}

function parseTranslatedParagraphs(paragraphs) {
  const specs = [];
  const bodyParagraphs = [];
  const highlightLines = [];
  const introTitle =
    paragraphs[0] && paragraphs[0].length <= 90 && !paragraphs[0].includes(':') ? paragraphs[0] : undefined;
  const introSubtitle =
    paragraphs[1] && paragraphs[1].length <= 150 && !paragraphs[1].includes(':') ? paragraphs[1] : undefined;

  for (const [index, paragraph] of paragraphs.entries()) {
    const normalized = paragraph.replace(/\s+/g, ' ').trim();
    if (!normalized) continue;

    if (index === 0 && normalized === introTitle) continue;
    if (index === 1 && normalized === introSubtitle) continue;

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

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0',
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Fetch failed ${response.status} for ${url}`);
  }

  return response.json();
}

async function getDailyRate() {
  const response = await fetch(DAILY_RATE_URL, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) {
    throw new Error(`Rate fetch failed: ${response.status}`);
  }

  const text = await response.text();
  const line = text
    .split('\n')
    .map((value) => value.trim())
    .find((value) => value.includes('|EUR|'));

  if (!line) {
    throw new Error('EUR rate not found in CNB daily feed');
  }

  const [, , amount, , rate] = line.split('|');
  return Number(rate.replace(',', '.')) / Number(amount);
}

async function translateText(value) {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (TEXT_OVERRIDES[trimmed]) return TEXT_OVERRIDES[trimmed];
  if (translationCache.has(trimmed)) return translationCache.get(trimmed);

  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=cs&dt=t&q=' +
    encodeURIComponent(trimmed);

  const response = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) {
    translationCache.set(trimmed, trimmed);
    return trimmed;
  }

  const payload = await response.json();
  const translated = Array.isArray(payload?.[0]) ? payload[0].map((chunk) => chunk[0]).join('') : trimmed;
  translationCache.set(trimmed, translated);
  return translated;
}

async function translateParagraphs(paragraphs) {
  if (paragraphs.length === 0) return [];

  const separator = '\n<<<MUSETTI_SPLIT>>>\n';
  const translatedBlock = await translateText(paragraphs.join(separator));
  const translated = translatedBlock.split('<<<MUSETTI_SPLIT>>>').map((value) => value.trim());

  if (translated.length === paragraphs.length) {
    return translated;
  }

  const fallback = [];
  for (const paragraph of paragraphs) {
    fallback.push(await translateText(paragraph));
  }
  return fallback;
}

function categoryPriority(handle) {
  const order = [
    'caffe-in-grani',
    'capsule-compatibili-nespresso',
    'cialde-compostabili',
    'caffe-macinato',
    'capsule-compatibili-lavazza-a-modo-mio',
    'capsule-compatibili-nescafe-dolce-gusto',
    'te-e-infusi',
    'cioccolate-calde',
    'prodotti-gourmet',
    'biscotti',
    'cioccolatini',
    'macchine-da-caffe',
    'macchine-caffe-delonghi',
    'tazzine-e-accessori',
    'offerte',
    'easter',
  ];
  const index = order.indexOf(handle);
  return index === -1 ? 999 : index;
}

async function buildCatalog() {
  const rateEurToCzk = await getDailyRate();
  const collectionsPayload = await fetchJson(`${SOURCE_BASE_URL}/collections.json?limit=250`);
  const collections = collectionsPayload.collections.filter((collection) =>
    ALLOWED_CATEGORY_HANDLES.has(collection.handle),
  );

  const collectionProducts = new Map();
  for (const collection of collections) {
    const payload = await fetchJson(
      `${SOURCE_BASE_URL}/collections/${collection.handle}/products.json?limit=250`,
    );
    collectionProducts.set(collection.handle, payload.products);
  }

  const productById = new Map();

  for (const collection of collections) {
    const products = collectionProducts.get(collection.handle) ?? [];
    for (const product of products) {
      const existing = productById.get(product.id);
      if (!existing) {
        productById.set(product.id, {
          ...product,
          collectionHandles: [collection.handle],
        });
      } else {
        existing.collectionHandles.push(collection.handle);
      }
    }
  }

  const categoryEntries = [];
  for (const collection of collections) {
    const products = collectionProducts.get(collection.handle) ?? [];
    if (products.length === 0) continue;

    const translatedLabel =
      CATEGORY_OVERRIDES[collection.handle]?.label ?? (await translateText(collection.title));

    const slug = CATEGORY_OVERRIDES[collection.handle]?.slug ?? slugify(translatedLabel);
    const heroImages = products.flatMap((product) => product.images.map((image) => image.src)).slice(0, 2);

    categoryEntries.push({
      id: collection.handle,
      slug,
      label: translatedLabel,
      headline:
        CATEGORY_OVERRIDES[collection.handle]?.headline ??
        `Výběr kolekce ${translatedLabel.toLowerCase()} převzatý z oficiálního storefrontu Musetti.`,
      description:
        CATEGORY_OVERRIDES[collection.handle]?.description ??
        `Interní CZ varianta kolekce ${translatedLabel.toLowerCase()} včetně produktových detailů, galerií a lokálních cen v korunách.`,
      shortNote: `${products.length} produktů`,
      href: `#${slug}`,
      pageHref: `/kategorie/${slug}`,
      shopUrl: `${SOURCE_BASE_URL}/collections/${collection.handle}?country=CZ`,
      accent: CATEGORY_OVERRIDES[collection.handle]?.accent ?? '#8a6b59',
      panelClassName:
        CATEGORY_OVERRIDES[collection.handle]?.panelClassName ??
        'from-[#fffaf5] via-[#fffdf9] to-[#efe4d7]',
      heroImages,
      audience:
        CATEGORY_OVERRIDES[collection.handle]?.audience ??
        `Plná lokální sekce pro kategorii ${translatedLabel.toLowerCase()} v novém storefrontu.`,
      benefits: CATEGORY_OVERRIDES[collection.handle]?.benefits ?? [],
      featured: FEATURED_CATEGORY_HANDLES.has(collection.handle),
      sourceCollectionHandle: collection.handle,
      sourceCollectionUrl: `${SOURCE_BASE_URL}/collections/${collection.handle}?country=CZ`,
      productCount: products.length,
    });
  }

  const sortedCategories = categoryEntries.sort((a, b) => categoryPriority(a.id) - categoryPriority(b.id));

  const categoryMap = new Map(sortedCategories.map((category) => [category.id, category]));

  const productEntries = [];
  for (const product of Array.from(productById.values())) {
    const primaryHandle = [...product.collectionHandles].sort((a, b) => categoryPriority(a) - categoryPriority(b))[0];
    const category = categoryMap.get(primaryHandle);
    if (!category) continue;

    const translatedTitle = await translateText(product.title);
    const paragraphs = splitParagraphs(product.body_html);
    const translatedParagraphs = await translateParagraphs(paragraphs);
    const parsedDetail = parseTranslatedParagraphs(translatedParagraphs);

    const leadCandidate =
      translatedParagraphs.find((paragraph) => paragraph.length > 25 && paragraph.length <= 220) ??
      translatedParagraphs[0] ??
      (await translateText('Produkt Caffè Musetti z oficiální evropské nabídky.'));

    const shortDescription = leadCandidate.split(/(?<=[.!?])\s+/)[0].trim();

    const priceCzk = Math.round(Number(product.variants[0]?.price || 0) * rateEurToCzk);
    const compareAtPriceRaw = Number(product.variants[0]?.compare_at_price || 0);
    const compareAtPriceCzk = compareAtPriceRaw > 0 ? Math.round(compareAtPriceRaw * rateEurToCzk) : undefined;
    const hasCompareAtPrice = Boolean(compareAtPriceCzk && compareAtPriceCzk > priceCzk);

    const sourceUrl = `${SOURCE_BASE_URL}/products/${product.handle}?country=CZ`;
    const variants = inferVariants(product);
    const titleForDetail = translatedTitle;

    productEntries.push({
      id: String(product.id),
      slug: product.handle,
      categoryId: category.id,
      category: category.label,
      collectionHandles: [...product.collectionHandles].sort((a, b) => categoryPriority(a) - categoryPriority(b)),
      title: translatedTitle,
      shortDescription,
      price: priceToCzkLabel(priceCzk),
      priceCzk,
      compareAtPrice: hasCompareAtPrice ? priceToCzkLabel(compareAtPriceCzk) : undefined,
      compareAtPriceCzk: hasCompareAtPrice ? compareAtPriceCzk : undefined,
      variants,
      href: `/produkty/${product.handle}`,
      sourceUrl,
      sourceHandle: product.handle,
      images: product.images.map((image) => image.src),
      featured: category.featured,
      detail: {
        title: titleForDetail,
        lead: shortDescription,
        manufacturer: product.vendor || 'Caffè Musetti',
        productCode: product.variants[0]?.sku || 'neuvedeno',
        stockLabel: product.variants.some((variant) => variant.available) ? 'Skladem' : 'Na dotaz',
        shippingLabel: 'Doprava a platba',
        introTitle: parsedDetail.introTitle,
        introSubtitle: parsedDetail.introSubtitle,
        highlightLines: parsedDetail.highlightLines,
        bodyParagraphs: parsedDetail.bodyParagraphs,
        specs: parsedDetail.specs,
        galleryImages: product.images.map((image) => image.src),
        contact: {
          phone: '608902070, 777033307',
          email: 'info@musettishop.cz',
          quickContactLabel: 'Rychlý kontakt',
        },
      },
    });
  }

  const sortedProducts = productEntries.sort((a, b) => a.title.localeCompare(b.title, 'cs'));

  return {
    generatedAt: new Date().toISOString(),
    exchangeRateDate: new Date().toISOString().slice(0, 10),
    exchangeRateSource: DAILY_RATE_URL,
    exchangeRateEurToCzk: rateEurToCzk,
    catalogCategories: sortedCategories,
    catalogProducts: sortedProducts,
  };
}

function serialize(value) {
  return JSON.stringify(value, null, 2);
}

async function main() {
  const catalog = await buildCatalog();

  const content = `export const catalogMeta = ${serialize({
    generatedAt: catalog.generatedAt,
    exchangeRateDate: catalog.exchangeRateDate,
    exchangeRateSource: catalog.exchangeRateSource,
    exchangeRateEurToCzk: catalog.exchangeRateEurToCzk,
  })} as const;\n\nexport const catalogCategories = ${serialize(catalog.catalogCategories)} as const;\n\nexport const catalogProducts = ${serialize(catalog.catalogProducts)} as const;\n`;

  await fs.writeFile(OUTPUT_FILE, content, 'utf8');
  console.log(`Generated ${OUTPUT_FILE}`);
  console.log(`Categories: ${catalog.catalogCategories.length}`);
  console.log(`Products: ${catalog.catalogProducts.length}`);
  console.log(`EUR/CZK: ${catalog.exchangeRateEurToCzk}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

const EUR_TO_CZK_RATE = 24.438;
const EUR_RATE_DATE = '2026-03-23';
const SOURCE_BASE_URL = 'https://musettishop.com/en-eu';

type ShopifyCollection = {
  title: string;
  handle: string;
  products_count: number;
};

type ShopifyVariant = {
  title: string;
  price: string;
  compare_at_price: string | null;
  sku: string;
  available: boolean;
};

type ShopifyProduct = {
  title: string;
  handle: string;
  vendor: string;
  type: string;
  description: string;
  variants: ShopifyVariant[];
  images: string[];
};

type CuratedCollection = {
  handle: string;
  slug: string;
  label: string;
  headline: string;
  description: string;
  accent: string;
  badges: string[];
  core?: boolean;
};

export type SourceSection = CuratedCollection & {
  productsCount: number;
  sourceTitle: string;
  href: string;
};

export type SourceCatalogProduct = {
  slug: string;
  handle: string;
  sectionSlug: string;
  sectionLabel: string;
  title: string;
  shortDescription: string;
  price: string;
  compareAtPrice?: string;
  variants: string[];
  href: string;
  sourceUrl: string;
  images: string[];
  sku?: string;
  available: boolean;
};

export type SourceCatalogDetail = {
  product: SourceCatalogProduct;
  section: SourceSection | null;
  sourceTitle: string;
  lead?: string;
  descriptionHtml: string;
  bodyParagraphs: string[];
  specs: Array<{ label: string; value: string }>;
  galleryImages: string[];
  manufacturer?: string;
  productCode?: string;
  stockLabel?: string;
};

const CURATED_COLLECTIONS: CuratedCollection[] = [
  {
    handle: 'caffe-in-grani',
    slug: 'zrnkova-kava',
    label: 'Zrnková káva',
    headline: 'Plný bean sortiment Musetti od hlavních blendů až po limitované a premium řady.',
    description:
      'Vedle základních blendů Armonico, Intenso, Gentile a Deca sem patří i premium zrna, single origin a speciální řady, které v původním CZ konceptu zatím chyběly.',
    accent: '#b86f92',
    badges: ['espresso', '1 kg i speciality', 'kompletní bean nabídka'],
    core: true,
  },
  {
    handle: 'caffe-macinato',
    slug: 'mleta-kava',
    label: 'Mletá káva',
    headline: 'Mletá káva pro moka přípravu, domácí rytmus i ochucené varianty.',
    description:
      'Rozšířená mletá řada zahrnuje základní blendy, bezkofeinové i ochucené varianty. Oproti původnímu projektu jde o širší a reálně prodejný segment.',
    accent: '#486a3f',
    badges: ['moka', 'ochucené varianty', 'každodenní nákup'],
    core: true,
  },
  {
    handle: 'cialde-compostabili',
    slug: 'pody',
    label: 'Kompostovatelné pody',
    headline: 'Kompletní podová řada od základních směsí po větší provozní balení.',
    description:
      'Kromě Armonico, Gentile a Intenso sem nově patří i Deca, tasting kit a další blendy ve větších boxech. Sekce tak odpovídá skutečné šíři source shopu.',
    accent: '#79886e',
    badges: ['ESE pody', 'kompostovatelné', '18 až 150 ks'],
    core: true,
  },
  {
    handle: 'capsule-compatibili-nespresso',
    slug: 'kapsle-nespresso',
    label: 'Kapsle kompatibilní s Nespresso',
    headline: 'Hliníkové kapsle Musetti kompatibilní s Nespresso včetně tasting kitů a Deca.',
    description:
      'Původní homepage ukazovala jen část nabídky. Zdrojový shop přidává Deca a degustační sadu, takže interní katalog teď může obsloužit kompletní kapslovou větev.',
    accent: '#8a6b59',
    badges: ['hliníkové kapsle', 'degustační sada', 'Deca'],
    core: true,
  },
  {
    handle: 'capsule-compatibili-lavazza-a-modo-mio',
    slug: 'kapsle-lavazza-a-modo-mio',
    label: 'Kapsle kompatibilní s Lavazza A Modo Mio',
    headline: 'Další kompatibilní kapslový formát mimo Nespresso.',
    description:
      'Sekce rozšiřuje prodejní strukturu o další kapslový standard, který v projektu zatím úplně chyběl.',
    accent: '#8c6f53',
    badges: ['Lavazza A Modo Mio', 'alternativní systém'],
  },
  {
    handle: 'capsule-compatibili-nescafe-dolce-gusto',
    slug: 'kapsle-dolce-gusto',
    label: 'Kapsle kompatibilní s Dolce Gusto',
    headline: 'Dolce Gusto kompatibilní kapsle včetně ginseng varianty.',
    description:
      'Malá, ale samostatná sekce pro zákazníky, kteří nakupují podle systému kávovaru a ne podle blendu.',
    accent: '#8b7358',
    badges: ['Dolce Gusto', 'ginseng', 'alternativní systém'],
  },
  {
    handle: 'macchine-da-caffe',
    slug: 'kavovary',
    label: 'Kávovary',
    headline: 'Plnohodnotná technická sekce s pákovými, podovými i automatickými stroji.',
    description:
      'Zdrojový shop neprodává jen kávu. Tahle sekce přidává stroje De’Longhi, Spinel a La Piccola včetně bundle nabídek.',
    accent: '#7b6558',
    badges: ['technika', 'bundle', 'De’Longhi a Spinel'],
  },
  {
    handle: 'macchine-caffe-delonghi',
    slug: 'kavovary-delonghi',
    label: 'Kávovary De’Longhi',
    headline: 'Specializovaná podsekce pro De’Longhi stroje a doplňky.',
    description:
      'Pokud má mít storefront kompletní prodejní strukturu, musí umět obsloužit i výrobkové větve podle značky zařízení.',
    accent: '#7b6558',
    badges: ['De’Longhi', 'automatické stroje', 'příslušenství'],
  },
  {
    handle: 'tazzine-e-accessori',
    slug: 'salky-a-prislusenstvi',
    label: 'Šálky a příslušenství',
    headline: 'Servírovací a doplňkový segment pro retail i HoReCa.',
    description:
      'Součástí source katalogu jsou šálky, podšálky, skleničky, mlýnky a další doplňky. V aktuálním projektu tato větev chyběla úplně.',
    accent: '#7f6f64',
    badges: ['šálky', 'mlýnky', 'doplňky'],
  },
  {
    handle: 'te-e-infusi',
    slug: 'caje-a-nalevy',
    label: 'Čaje a nálevy',
    headline: 'Doplňkový warm beverages segment pro širší košík.',
    description:
      'Čaje, bylinné nálevy, ginseng a ječné pody dávají webu širší prodejní logiku než čistě kávovou.',
    accent: '#7c8a62',
    badges: ['čaje', 'nálevy', 'ginseng'],
  },
  {
    handle: 'cioccolate-calde',
    slug: 'horke-cokolady',
    label: 'Horké čokolády',
    headline: 'Samostatná sekce pro čokoládové nápoje a směsi.',
    description:
      'Malý, ale komerčně relevantní doplněk sortimentu pro domácnost i gastro provozy.',
    accent: '#8e6653',
    badges: ['horká čokoláda', 'tmavá', 'gianduia'],
  },
  {
    handle: 'cioccolatini',
    slug: 'cokolady-a-sladkosti',
    label: 'Čokolády a sladkosti',
    headline: 'Bonboniéry, čokoládová zrna a dárkové sladkosti Musetti.',
    description:
      'Tahle sekce posouvá storefront od čisté kávy k širšímu gift a impulse sortimentu.',
    accent: '#8f6a56',
    badges: ['gift segment', 'čokoláda', 'bonboniéry'],
  },
  {
    handle: 'bagai',
    slug: 'bagai',
    label: 'Bagai',
    headline: 'Prémiové čokolády a pomazánky z partnerské produktové řady.',
    description:
      'Bagai není káva, ale ve zdrojovém shopu tvoří samostatný segment. V interní struktuře proto dostává vlastní sekci.',
    accent: '#8e6b56',
    badges: ['čokoláda', 'pomazánky', 'prémiový doplněk'],
  },
  {
    handle: 'zaba',
    slug: 'zaba',
    label: 'Zabà',
    headline: 'Zabaglione a doprovodné sladké speciality.',
    description:
      'Další samostatná větev source shopu, kterou současný projekt vůbec nepokrýval.',
    accent: '#8e6b56',
    badges: ['zabaglione', 'dezerty', 'speciality'],
  },
];

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function normalizeImageUrl(url: string) {
  if (!url) {
    return '';
  }

  return url.startsWith('//') ? `https:${url}` : url;
}

function formatCzk(czk: number) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(Math.round(czk));
}

function formatCzkFromEur(eur: string | number | null | undefined) {
  const numeric = Number(eur ?? 0);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return undefined;
  }

  return formatCzk(numeric * EUR_TO_CZK_RATE);
}

function stripHtmlTags(value: string) {
  return normalizeWhitespace(
    value
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/p>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"'),
  );
}

function sanitizeHtml(value: string) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<button[\s\S]*?<\/button>/gi, '')
    .replace(/\s(?:class|style|id|target|rel|aria-[a-z-]+|data-[a-z-]+)="[^"]*"/gi, '');
}

const TITLE_REPLACEMENTS: Array<[RegExp, string]> = [
  [/^Musetti Coffee Beans, /i, 'Caffè Musetti zrnková káva, '],
  [/^Musetti coffee beans, /i, 'Caffè Musetti zrnková káva, '],
  [/^Musetti ground coffee - /i, 'Caffè Musetti mletá káva - '],
  [/^GROUND COFFEE /i, 'Mletá káva '],
  [/^Musetti Ground Coffee - /i, 'Caffè Musetti mletá káva - '],
  [/^Musetti Aluminum Coffee Capsules Compatible with Nespresso\* - /i, 'Caffè Musetti hliníkové kapsle kompatibilní s Nespresso - '],
  [/^Musetti Coffee Capsules Compatible with Nescafè Dolce Gusto\* - /i, 'Caffè Musetti kapsle kompatibilní s Nescafé Dolce Gusto - '],
  [/^Musetti coffee capsules compatible with Nescafè Dolce Gusto\* - /i, 'Caffè Musetti kapsle kompatibilní s Nescafé Dolce Gusto - '],
  [/^Musetti coffee capsules compatible with Lavazza A Modo Mio\* - /i, 'Caffè Musetti kapsle kompatibilní s Lavazza A Modo Mio - '],
  [/^Compostable coffee pods Musetti - /i, 'Caffè Musetti kompostovatelné pody - '],
  [/^Musetti Compostable Coffee Pods Tasting Kit - /i, 'Degustační sada kompostovatelných podů Caffè Musetti - '],
  [/^Tasting Kit Musetti Aluminum Coffee Capsules Compatible with Nespresso\* - /i, 'Degustační sada hliníkových kapslí Caffè Musetti kompatibilních s Nespresso - '],
  [/^Set of 6 /i, 'Sada 6 ks - '],
  [/^Musetti Tea, Herbal Teas and Infusions - /i, 'Caffè Musetti čaje, bylinkové čaje a nálevy - '],
  [/^Musetti Hot Chocolate - /i, 'Caffè Musetti horká čokoláda - '],
  [/^Classic Marsala Zaba/i, 'Zabà Classic Marsala'],
  [/ blend/gi, ' směs'],
  [/Coffee Beans/gi, 'zrnková káva'],
  [/ground coffee/gi, 'mletá káva'],
  [/Compostable Coffee Pods/gi, 'kompostovatelné pody'],
  [/Coffee Capsules/gi, 'kávové kapsle'],
  [/Compatible with/gi, 'kompatibilní s'],
  [/Hot Chocolate/gi, 'horká čokoláda'],
  [/Dark Chocolate Bar/gi, 'tabulka hořké čokolády'],
  [/Hazelnut and Cocoa Spread/gi, 'lískooříškový a kakaový krém'],
  [/Almond and Cocoa Spread/gi, 'mandlový a kakaový krém'],
];

const HTML_REPLACEMENTS: Array<[RegExp, string]> = [
  [/Main ingredients/gi, 'Hlavní ingredience'],
  [/Format/gi, 'Balení'],
  [/Ingredients/gi, 'Složení'],
  [/Nutritional values \(per 100g\)/gi, 'Výživové údaje (na 100 g)'],
  [/Energy/gi, 'Energie'],
  [/Fats/gi, 'Tuky'],
  [/of which saturated fatty acids/gi, 'z toho nasycené mastné kyseliny'],
  [/Carbohydrates/gi, 'Sacharidy'],
  [/of which sugars/gi, 'z toho cukry'],
  [/Fibers/gi, 'Vláknina'],
  [/Proteins/gi, 'Bílkoviny'],
  [/Salt/gi, 'Sůl'],
  [/Values/gi, 'Hodnoty'],
  [/Nutritious/gi, 'Ukazatel'],
  [/Details/gi, 'Detaily'],
  [/Show details/gi, 'Zobrazit detaily'],
  [/Hide details/gi, 'Skrýt detaily'],
  [/Inside the box, you will find/gi, 'Uvnitř balení najdete'],
  [/Inside the box you will find/gi, 'Uvnitř balení najdete'],
  [/Net Weight/gi, 'Čistá hmotnost'],
  [/fresh butter/gi, 'čerstvé máslo'],
  [/fresh pasteurized egg yolks/gi, 'čerstvé pasterované žloutky'],
  [/natural yeast/gi, 'přírodní kvásek'],
  [/white chocolate/gi, 'bílá čokoláda'],
  [/dark chocolate/gi, 'hořká čokoláda'],
  [/milk chocolate/gi, 'mléčná čokoláda'],
  [/candied orange peel/gi, 'kandovaná pomerančová kůra'],
  [/candied citron/gi, 'kandovaný citron'],
  [/raisins/gi, 'rozinky'],
  [/hazelnuts/gi, 'lískové ořechy'],
  [/hazelnut/gi, 'lískový ořech'],
  [/pistachio/gi, 'pistácie'],
  [/almonds/gi, 'mandle'],
  [/acacia honey/gi, 'akátový med'],
  [/naturally leavened/gi, 'přirozeně kynutý'],
  [/artisanal/gi, 'řemeslný'],
  [/coffee beans/gi, 'kávová zrna'],
  [/ground coffee/gi, 'mletá káva'],
  [/strong and creamy taste/gi, 'silná a krémová chuť'],
  [/Predominant notes/gi, 'Převládající tóny'],
  [/Intensity/gi, 'Intenzita'],
  [/Quality/gi, 'Kvalita'],
  [/Arabica and Robusta/gi, 'Arabica a Robusta'],
];

function applyReplacements(value: string, replacements: Array<[RegExp, string]>) {
  return replacements.reduce((output, [pattern, replacement]) => output.replace(pattern, replacement), value);
}

function translateTitle(title: string) {
  return normalizeWhitespace(applyReplacements(title, TITLE_REPLACEMENTS));
}

function translateHtml(html: string) {
  return applyReplacements(html, HTML_REPLACEMENTS);
}

function extractParagraphsFromHtml(html: string) {
  const paragraphs = Array.from(html.matchAll(/<(?:p|li)[^>]*>([\s\S]*?)<\/(?:p|li)>/gi)).map((match) =>
    stripHtmlTags(match[1] ?? ''),
  );

  return paragraphs.filter(Boolean);
}

function buildSpecsFromParagraphs(paragraphs: string[]) {
  const specs: Array<{ label: string; value: string }> = [];
  const bodyParagraphs: string[] = [];

  for (const paragraph of paragraphs) {
    const normalized = normalizeWhitespace(paragraph);
    const specMatch = normalized.match(/^([^:]{2,90})\s*:\s*(.+)$/);

    if (specMatch) {
      specs.push({
        label: specMatch[1].trim(),
        value: specMatch[2].trim(),
      });
      continue;
    }

    bodyParagraphs.push(normalized);
  }

  return { bodyParagraphs, specs };
}

function createShortDescription(descriptionHtml: string) {
  const paragraphs = extractParagraphsFromHtml(descriptionHtml);
  const candidate = paragraphs.find((paragraph) => !/^Balení\s*:/i.test(paragraph)) ?? paragraphs[0] ?? '';
  return candidate.slice(0, 220);
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0',
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getCollectionsFeed() {
  const data = await fetchJson<{ collections: ShopifyCollection[] }>(
    `${SOURCE_BASE_URL}/collections.json?limit=250`,
  );
  return data.collections;
}

async function getCollectionProducts(handle: string) {
  const data = await fetchJson<{ products: ShopifyProduct[] }>(
    `${SOURCE_BASE_URL}/collections/${handle}/products.json?limit=250`,
  );
  return data.products;
}

async function getProductJs(handle: string) {
  return fetchJson<ShopifyProduct & { available: boolean }>(`${SOURCE_BASE_URL}/products/${handle}.js`);
}

function mapCollectionToSection(collection: CuratedCollection, sourceTitle: string, count: number): SourceSection {
  return {
    ...collection,
    productsCount: count,
    sourceTitle,
    href: `/kategorie/${collection.slug}`,
  };
}

function mapProductToCard(section: SourceSection, product: ShopifyProduct): SourceCatalogProduct {
  const translatedDescriptionHtml = translateHtml(sanitizeHtml(product.description ?? ''));
  const primaryVariant = product.variants[0];
  const variants = product.variants
    .map((variant) => (variant.title === 'Default Title' ? '' : variant.title))
    .filter(Boolean);
  const normalizedImages = product.images.map(normalizeImageUrl).filter(Boolean);

  return {
    slug: product.handle,
    handle: product.handle,
    sectionSlug: section.slug,
    sectionLabel: section.label,
    title: translateTitle(product.title),
    shortDescription: createShortDescription(translatedDescriptionHtml),
    price: formatCzkFromEur(primaryVariant?.price) ?? 'Cena na dotaz',
    compareAtPrice:
      primaryVariant?.compare_at_price && primaryVariant.compare_at_price !== primaryVariant.price
        ? formatCzkFromEur(primaryVariant.compare_at_price)
        : undefined,
    variants: variants.length > 0 ? variants : [primaryVariant?.title].filter(Boolean),
    href: `/produkty/${product.handle}?sekce=${section.slug}`,
    sourceUrl: `${SOURCE_BASE_URL}/products/${product.handle}`,
    images: normalizedImages,
    sku: primaryVariant?.sku || undefined,
    available: Boolean(primaryVariant?.available),
  };
}

export function getEurToCzkMeta() {
  return {
    rate: EUR_TO_CZK_RATE,
    date: EUR_RATE_DATE,
  };
}

export async function getSourceSections() {
  const collections = await getCollectionsFeed();

  return CURATED_COLLECTIONS.map((collection) => {
    const matchingCollection = collections.find((item) => item.handle === collection.handle);
    return mapCollectionToSection(collection, matchingCollection?.title ?? collection.label, matchingCollection?.products_count ?? 0);
  }).filter((section) => section.productsCount > 0);
}

export async function getSourceSectionBySlug(slug: string) {
  const sections = await getSourceSections();
  return sections.find((section) => section.slug === slug) ?? null;
}

export async function getAdditionalSourceSections() {
  const sections = await getSourceSections();
  return sections.filter((section) => !section.core);
}

export async function getSourceProductsBySection(slug: string) {
  const section = await getSourceSectionBySlug(slug);

  if (!section) {
    return [];
  }

  const products = await getCollectionProducts(section.handle);
  return products.map((product) => mapProductToCard(section, product));
}

export async function findSourceSectionForProduct(handle: string) {
  const sections = await getSourceSections();

  for (const section of sections) {
    const products = await getCollectionProducts(section.handle);
    if (products.some((product) => product.handle === handle)) {
      return section;
    }
  }

  return null;
}

export async function getSourceProductDetailByHandle(handle: string, preferredSectionSlug?: string): Promise<SourceCatalogDetail | null> {
  try {
    const product = await getProductJs(handle);
    const section =
      (preferredSectionSlug ? await getSourceSectionBySlug(preferredSectionSlug) : null) ??
      (await findSourceSectionForProduct(handle));

    const fallbackSection =
      section ??
      ({
        handle: 'misc',
        slug: preferredSectionSlug ?? 'sortiment',
        label: 'Sortiment',
        headline: 'Zdrojový produkt',
        description: 'Produkt importovaný přímo ze source shopu.',
        accent: '#8a6b59',
        badges: [],
        productsCount: 0,
        sourceTitle: 'Sortiment',
        href: '/sortiment',
      } satisfies SourceSection);

    const cardProduct = mapProductToCard(fallbackSection, product);
    const translatedDescriptionHtml = translateHtml(sanitizeHtml(product.description ?? ''));
    const paragraphs = extractParagraphsFromHtml(translatedDescriptionHtml);
    const lead = paragraphs.find((paragraph) => !/^Balení\s*:/i.test(paragraph)) ?? paragraphs[0];
    const { bodyParagraphs, specs } = buildSpecsFromParagraphs(paragraphs);

    return {
      product: cardProduct,
      section,
      sourceTitle: product.title,
      lead,
      descriptionHtml: translatedDescriptionHtml,
      bodyParagraphs,
      specs,
      galleryImages: product.images.map(normalizeImageUrl).filter(Boolean),
      manufacturer: product.vendor || 'Musetti',
      productCode: product.variants[0]?.sku || undefined,
      stockLabel: product.variants.some((variant) => variant.available) ? 'Skladem' : 'Na dotaz',
    };
  } catch {
    return null;
  }
}

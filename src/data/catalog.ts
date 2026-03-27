import {
  catalogCategories as generatedCatalogCategories,
  catalogMeta,
  catalogProducts as generatedCatalogProducts,
} from '@/data/generatedCatalog';

export type CatalogDetailSpec = {
  label: string;
  value: string;
};

export type CatalogProductDetail = {
  title?: string;
  lead?: string;
  manufacturer?: string;
  productCode?: string;
  stockLabel?: string;
  shippingLabel?: string;
  introTitle?: string;
  introSubtitle?: string;
  highlightLines: readonly string[];
  bodyParagraphs: readonly string[];
  specs: readonly CatalogDetailSpec[];
  galleryImages: readonly string[];
  contact: {
    phone: string;
    email: string;
    quickContactLabel: string;
  };
};

export type CatalogCategory = (typeof generatedCatalogCategories)[number];
export type CatalogProduct = {
  id: string;
  slug: string;
  categoryId: string;
  category: string;
  collectionHandles?: readonly string[];
  collectionSortOrders?: Record<string, number>;
  primarySortOrder?: number;
  title: string;
  shortDescription: string;
  price: string;
  priceCzk: number;
  compareAtPrice?: string;
  compareAtPriceCzk?: number;
  variants: readonly string[];
  href: string;
  sourceUrl: string;
  sourceHandle?: string;
  images: readonly string[];
  featured?: boolean;
  detail?: CatalogProductDetail;
};

export const catalogCategories: ReadonlyArray<CatalogCategory> = generatedCatalogCategories;
export const catalogProducts: ReadonlyArray<CatalogProduct> = generatedCatalogProducts;
export { catalogMeta };

export const featuredCategories = catalogCategories.filter((category) => category.featured);
export const additionalCategories = catalogCategories.filter((category) => !category.featured);

export function getCategoryBySlug(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}

export function getCategoryById(id: string) {
  return catalogCategories.find((category) => category.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return catalogProducts
    .filter(
      (product) =>
        product.categoryId === categoryId ||
        Boolean(product.collectionHandles && product.collectionHandles.includes(categoryId)),
    )
    .sort((a, b) => {
      const aOrder = a.collectionSortOrders?.[categoryId] ?? a.primarySortOrder ?? 999;
      const bOrder = b.collectionSortOrders?.[categoryId] ?? b.primarySortOrder ?? 999;

      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }

      return a.title.localeCompare(b.title, 'cs');
    });
}

export function getProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}

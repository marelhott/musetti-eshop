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
  highlightLines: string[];
  bodyParagraphs: string[];
  specs: CatalogDetailSpec[];
  galleryImages: string[];
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
  collectionHandles?: string[];
  collectionSortOrders?: Record<string, number>;
  primarySortOrder?: number;
  title: string;
  shortDescription: string;
  price: string;
  priceCzk: number;
  compareAtPrice?: string;
  compareAtPriceCzk?: number;
  variants: string[];
  href: string;
  sourceUrl: string;
  sourceHandle?: string;
  images: string[];
  featured?: boolean;
  detail?: CatalogProductDetail;
};

export const catalogCategoriesData = generatedCatalogCategories as unknown as CatalogCategory[];
export const catalogProductsData = generatedCatalogProducts as unknown as CatalogProduct[];
export { catalogMeta };

export const featuredCategories = catalogCategoriesData.filter((category) => category.featured);
export const additionalCategories = catalogCategoriesData.filter((category) => !category.featured);

export function getCategoryBySlug(slug: string) {
  return catalogCategoriesData.find((category) => category.slug === slug);
}

export function getCategoryById(id: string) {
  return catalogCategoriesData.find((category) => category.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return catalogProductsData
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
  return catalogProductsData.find((product) => product.slug === slug);
}

export const catalogCategoriesList = catalogCategoriesData;
export const catalogProductsList = catalogProductsData;
export const catalogCategories = catalogCategoriesData;
export const catalogProducts = catalogProductsData;

import type { MetadataRoute } from 'next';

import { catalogCategories, catalogProducts } from '@/data/catalog';

const siteUrl = 'https://musettishop.vercel.app';

const staticRoutes = [
  '',
  '/akce',
  '/blog',
  '/chi-siamo',
  '/contatti',
  '/gurmanske-produkty',
  '/miscela-armonico',
  '/miscela-deca',
  '/miscela-gentile',
  '/miscela-intenso',
  '/qualita',
  '/sortiment',
  '/sostenibilita',
  '/storia',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));

  const categoryEntries: MetadataRoute.Sitemap = catalogCategories.map((category) => ({
    url: `${siteUrl}${category.pageHref}`,
    lastModified,
  }));

  const productEntries: MetadataRoute.Sitemap = catalogProducts.map((product) => ({
    url: `${siteUrl}${product.href}`,
    lastModified,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}

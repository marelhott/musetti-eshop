import Link from 'next/link';
import { notFound } from 'next/navigation';

import CategoryProductBrowser from '@/components/CategoryProductBrowser';
import {
  catalogCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from '@/data/catalog';

type CategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export function generateStaticParams() {
  return catalogCategories.map((category: { slug: string }) => ({
    categorySlug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.id);

  return (
    <main className="bg-white">
      <section className="border-b border-[#ece4dd] bg-white">
        <div className="container mx-auto px-4 py-6 text-sm text-[#8b7769]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" className="transition-colors hover:text-[#a5513a]">
                Domů
              </Link>
              <span>/</span>
              <span className="text-[#2d1e17]">{category.label}</span>
            </div>
            <p className="text-sm uppercase tracking-[0.28em]" style={{ color: category.accent }}>
              {products.length} produktů
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="relative h-[78px]">
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[68%] text-center text-[2rem] font-semibold tracking-[0.04em] text-[#2d1e17] md:text-[2.6rem]">
              {category.label}
            </h1>
          </div>
        </div>
      </section>

      <CategoryProductBrowser products={products} categoryLabel={category.label} />
    </main>
  );
}

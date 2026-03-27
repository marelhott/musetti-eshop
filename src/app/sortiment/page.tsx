import Link from 'next/link';

import { ProductCard } from '@/components/ProductCard';
import type { CatalogCategory } from '@/data/catalog';
import { catalogCategories, getProductsByCategory } from '@/data/catalog';

export const dynamic = 'force-dynamic';

export default function SortimentPage() {
  const categoriesWithProducts = catalogCategories.map((category: CatalogCategory) => ({
    ...category,
    products: getProductsByCategory(category.id),
  }));

  return (
    <main className="bg-white">
      <section className="py-16 md:py-20">
        <div className="container mx-auto space-y-16 px-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b7769]">
            <Link href="/" className="transition-colors hover:text-[#a5513a]">
              Domů
            </Link>
            <span>/</span>
            <span className="text-[#2d1e17]">Sortiment</span>
            <span>/</span>
            <span className="text-[#8b7769]">{catalogCategories.length} sekcí</span>
          </div>

          {categoriesWithProducts.map((category: (typeof categoriesWithProducts)[number]) => (
            <section key={category.id} className="scroll-mt-24">
              <div className="mb-8 flex flex-col gap-4 border-b border-[#efe4db] pb-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.28em]" style={{ color: category.accent }}>
                    {category.shortNote}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#2d1e17] md:text-5xl">
                    {category.label}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#6f5a4e]">{category.description}</p>
                </div>
                <Link
                  href={category.pageHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#a5513a]"
                >
                  Otevřít sekci
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {category.products
                  .slice(0, 6)
                  .map((product: (typeof category.products)[number]) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

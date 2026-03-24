import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ProductCard } from '@/components/ProductCard';
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
      <section className="border-b border-[#efe4db] bg-[linear-gradient(180deg,#fff_0%,#f7f1eb_100%)]">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b7769]">
            <Link href="/" className="transition-colors hover:text-[#a5513a]">
              Domů
            </Link>
            <span>/</span>
            <span className="text-[#2d1e17]">{category.label}</span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em]" style={{ color: category.accent }}>
                {category.shortNote}
              </p>
              <h1 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-tight text-[#2d1e17] md:text-6xl">
                {category.label}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6f5a4e]">{category.headline}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#836e61]">{category.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {((category.benefits ?? []) as readonly string[]).map((benefit: string) => (
                  <span
                    key={benefit}
                    className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#705d51] ring-1 ring-[#eadfd5]"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-6 text-[#836e61]">{category.audience}</p>
            </div>

            <div className="relative min-h-[320px] rounded-[2rem] border border-[#eadfd5] bg-white p-6 shadow-[0_24px_80px_rgba(77,48,34,0.08)]">
              {(category.heroImages.slice(0, 2) as readonly string[]).map((image: string, imageIndex: number) => (
                <img
                  key={image}
                  src={image}
                  alt={category.label}
                  className={`absolute object-contain drop-shadow-[0_28px_38px_rgba(0,0,0,0.12)] ${
                    imageIndex === 0
                      ? 'left-6 top-6 h-52 md:h-64'
                      : 'bottom-4 right-4 z-10 h-60 md:h-72'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#efe4db] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#9f8575]">Produktový přehled</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1e17] md:text-5xl">
                {products.length} produktů v této kategorii
              </h2>
            </div>

            {category.shopUrl ? (
              <a
                href={category.shopUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#eadfd5] bg-white px-5 py-3 text-sm font-medium text-[#a5513a] transition-colors hover:bg-[#faf5f0]"
              >
                Zdrojová kolekce
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product: (typeof products)[number]) => (
              <ProductCard key={`${category.id}-${product.slug}`} product={product} categoryLabel={category.label} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

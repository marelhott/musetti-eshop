import Link from 'next/link';

import { ProductCard } from '@/components/ProductCard';
import { catalogCategories, getProductsByCategory } from '@/data/catalog';

const gourmetSectionOrder = [
  'te-e-infusi',
  'cioccolate-calde',
  'prodotti-gourmet',
  'biscotti',
  'cioccolatini',
  'bagai',
  'zaba',
] as const;

export default function GourmetPage() {
  const sections = gourmetSectionOrder
    .map((categoryId) => catalogCategories.find((category) => category.id === categoryId))
    .filter((category): category is (typeof catalogCategories)[number] => Boolean(category))
    .map((category) => ({
      ...category,
      products: getProductsByCategory(category.id),
    }));

  return (
    <main className="bg-white">
      <section className="border-b border-[#efe4db] bg-[linear-gradient(180deg,#fff_0%,#f7f1eb_100%)]">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b7769]">
            <Link href="/" className="transition-colors hover:text-[#a5513a]">
              Domů
            </Link>
            <span>/</span>
            <span className="text-[#2d1e17]">Gurmánské produkty</span>
          </div>

          <div className="mt-8 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#9c6b48]">Kompletní gurmánský výběr</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#2d1e17] md:text-6xl">
              Všechny gurmánské produkty v jednom přehledu
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6f5a4e]">
              Sekce jsou seřazené za sebou podle zdrojového storefrontu a uvnitř každé z nich držíme
              původní pořadí produktů.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto space-y-16 px-4">
          {sections.map((section) => (
            <section key={section.id} className="scroll-mt-24">
              <div className="mb-8 flex flex-col gap-4 border-b border-[#efe4db] pb-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.28em]" style={{ color: section.accent }}>
                    {section.shortNote}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[#2d1e17] md:text-5xl">
                    {section.label}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#6f5a4e]">{section.description}</p>
                </div>
                <Link
                  href={section.pageHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#a5513a]"
                >
                  Otevřít samostatnou sekci
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,19rem),1fr))]">
                {section.products.map((product) => (
                  <ProductCard key={`${section.id}-${product.slug}`} product={product} categoryLabel={section.label} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

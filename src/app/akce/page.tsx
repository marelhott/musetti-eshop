import Link from 'next/link';

import { ProductCard } from '@/components/ProductCard';
import type { CatalogCategory, CatalogProduct } from '@/data/catalog';
import { catalogCategories, getProductsByCategory } from '@/data/catalog';

export const dynamic = 'force-dynamic';

const promoCategoryIds = ['pasqua-bonfissuto', 'pasqua-sal-de-riso'];

export default function AkcePage() {
  const promoCategories = catalogCategories.filter((category: CatalogCategory) =>
    promoCategoryIds.includes(category.id),
  );

  const promoProducts = promoCategories.flatMap((category) => getProductsByCategory(category.id)).slice(0, 12);
  const heroProducts = promoProducts.slice(0, 3);
  const featuredProducts = promoProducts.slice(3, 9);

  return (
    <main className="bg-white">
      <section className="border-b border-[#efe4db] bg-[linear-gradient(180deg,#fff7f7_0%,#fff1eb_100%)]">
        <div className="container py-16 md:py-20">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#8b7769]">
            <Link href="/" className="transition-colors hover:text-[#a5513a]">
              Domů
            </Link>
            <span>/</span>
            <span className="text-[#2d1e17]">Akce</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#d94b4b]">Sezónní výběr</p>
              <h1 className="mt-4 max-w-[12ch] text-5xl font-semibold leading-[0.96] text-[#2d1e17] md:text-7xl">
                Velikonoční akce plná colomb a sladkých dárků
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4e]">
                Pro tuhle promo sekci jsme vytáhli velikonoční speciality ze zdrojového shopu a poskládali
                je jako samostatnou akční nabídku. Najdeš tu výběr od Bonfissuto i Sal De Riso, připravený
                jako výrazný sezónní vstup přímo v e-shopu.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {promoCategories.map((category: CatalogCategory) => (
                  <Link
                    key={category.id}
                    href={category.pageHref}
                    className="rounded-full border border-[#e9cfc2] bg-white px-4 py-2 text-sm font-medium text-[#7f695b] transition-colors hover:bg-[#fff6f1] hover:text-[#a5513a]"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={promoCategories[0]?.pageHref ?? '/'}
                  className="rounded-full bg-[#2d1e17] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Otevřít akční nabídku
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-[#cfb9aa] px-6 py-3 text-sm font-semibold text-[#6b5447] transition-colors hover:bg-[#faf5f0]"
                >
                  Zpět na homepage
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-2">
              {heroProducts.map((product: CatalogProduct, index: number) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className={`group overflow-hidden rounded-[2rem] border border-[#eadfd5] bg-white p-5 shadow-[0_18px_50px_rgba(77,48,34,0.06)] ${
                    index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex h-full flex-col justify-between gap-5">
                    <div className="relative min-h-[220px] rounded-[1.5rem] bg-[linear-gradient(180deg,#fff_0%,#fff6f1_100%)] p-4">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#b0917e]">{product.category}</p>
                      <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#2d1e17]">
                        {product.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-[#6f5a4e]">{product.shortDescription}</p>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-[#efe4db] pt-4">
                      <div className="text-2xl font-semibold text-[#2d1e17]">{product.price}</div>
                      <span className="text-sm font-medium text-[#a5513a]">Detail produktu</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#efe4db] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#9f8575]">Akční výběr</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#2d1e17] md:text-5xl">
                Hlavní velikonoční produkty
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[#836e61]">
              Ručně zvýrazněný výběr sezónních sladkostí a dárkových balení, které dávají smysl jako
              samostatná promo kampaň.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product: CatalogProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {promoCategories.map((category: CatalogCategory) => {
              const categoryProducts = getProductsByCategory(category.id);

              return (
                <div
                  key={category.id}
                  className="rounded-[2rem] border border-[#eadfd5] bg-[linear-gradient(180deg,#fff_0%,#faf4ef_100%)] p-7"
                >
                  <p className="text-sm uppercase tracking-[0.28em]" style={{ color: category.accent }}>
                    {category.shortNote}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#2d1e17]">{category.label}</h3>
                  <p className="mt-4 text-base leading-7 text-[#6f5a4e]">{category.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="text-sm leading-6 text-[#836e61]">
                      {categoryProducts.length} produktů připravených pro sezónní promo stránku.
                    </div>
                    <Link
                      href={category.pageHref}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#a5513a]"
                    >
                      Otevřít sekci
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

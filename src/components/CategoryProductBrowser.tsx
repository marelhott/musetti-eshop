'use client';

import Link from 'next/link';
import { Grid2x2, LayoutGrid, List, Search, ShoppingCart, User } from 'lucide-react';
import { useMemo, useState } from 'react';

import type { CatalogProduct } from '@/data/catalog';
import { ProductCard } from '@/components/ProductCard';

type CategoryProductBrowserProps = {
  products: readonly CatalogProduct[];
  categoryLabel: string;
};

type ViewMode = 'small' | 'medium' | 'list';
type SortMode = 'recommended' | 'price-asc' | 'price-desc';

function SmallCard({ product, categoryLabel }: { product: CatalogProduct; categoryLabel: string }) {
  return (
    <Link href={product.href} className="group flex flex-col items-center gap-4 py-5 text-center">
      <div className="flex h-64 w-full items-center justify-center bg-white px-4">
        <img src={product.images[0]} alt={product.title} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#8d7c70]">{categoryLabel}</p>
        <h3 className="text-[0.95rem] font-medium uppercase tracking-[0.08em] text-[#2d1e17]">{product.title}</h3>
        <p className="text-sm text-[#7d6a5f]">{product.price}</p>
      </div>
    </Link>
  );
}

function ListCard({ product, categoryLabel }: { product: CatalogProduct; categoryLabel: string }) {
  return (
    <Link href={product.href} className="group grid items-center gap-5 border-b border-[#efe6df] py-5 md:grid-cols-[180px_1fr_auto]">
      <div className="flex h-40 items-center justify-center bg-white px-4">
        <img src={product.images[0]} alt={product.title} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#8d7c70]">{categoryLabel}</p>
        <h3 className="mt-3 text-2xl font-semibold text-[#2d1e17]">{product.title}</h3>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#7a665a]">{product.shortDescription}</p>
      </div>
      <div className="text-left md:text-right">
        <div className="text-2xl font-semibold text-[#2d1e17]">{product.price}</div>
        <div className="mt-3 text-sm font-medium text-[#a5513a]">Detail produktu</div>
      </div>
    </Link>
  );
}

export default function CategoryProductBrowser({
  products,
  categoryLabel,
}: CategoryProductBrowserProps) {
  const [view, setView] = useState<ViewMode>('medium');
  const [sortMode, setSortMode] = useState<SortMode>('recommended');

  const sortedProducts = useMemo(() => {
    const next = [...products];

    if (sortMode === 'price-asc') {
      next.sort((a, b) => a.priceCzk - b.priceCzk);
    } else if (sortMode === 'price-desc') {
      next.sort((a, b) => b.priceCzk - a.priceCzk);
    }

    return next;
  }, [products, sortMode]);

  return (
    <>
      <div className="border-y border-[#ece4dd] bg-white">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setView('small')}
              className={`rounded-md border px-3 py-2 transition-colors ${view === 'small' ? 'border-[#2d1e17] bg-[#2d1e17] text-white' : 'border-[#ece4dd] bg-white text-[#6f5a4e]'}`}
              aria-label="Malé náhledy"
            >
              <Grid2x2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('medium')}
              className={`rounded-md border px-3 py-2 transition-colors ${view === 'medium' ? 'border-[#2d1e17] bg-[#2d1e17] text-white' : 'border-[#ece4dd] bg-white text-[#6f5a4e]'}`}
              aria-label="Střední karty"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              className={`rounded-md border px-3 py-2 transition-colors ${view === 'list' ? 'border-[#2d1e17] bg-[#2d1e17] text-white' : 'border-[#ece4dd] bg-white text-[#6f5a4e]'}`}
              aria-label="Seznam"
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="category-sort" className="text-sm text-[#8d7c70]">
              Řazení
            </label>
            <select
              id="category-sort"
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              className="rounded-full border border-[#ece4dd] bg-white px-4 py-2 text-sm text-[#2d1e17] outline-none"
            >
              <option value="recommended">Doporučené</option>
              <option value="price-asc">Nejlevnější</option>
              <option value="price-desc">Nejdražší</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {view === 'small' ? (
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product) => (
              <SmallCard key={product.slug} product={product} categoryLabel={categoryLabel} />
            ))}
          </div>
        ) : null}

        {view === 'medium' ? (
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,19rem),1fr))]">
            {sortedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} categoryLabel={categoryLabel} />
            ))}
          </div>
        ) : null}

        {view === 'list' ? (
          <div className="bg-white">
            {sortedProducts.map((product) => (
              <ListCard key={product.slug} product={product} categoryLabel={categoryLabel} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

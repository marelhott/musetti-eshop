'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';

import { useCart } from '@/components/CartProvider';
import type { CatalogProduct } from '@/data/catalog';

type ProductCardProps = {
  product: CatalogProduct;
  categoryLabel?: string;
};

export function ProductCard({ product, categoryLabel }: ProductCardProps) {
  const { addItem } = useCart();
  const [primaryImage, secondaryImage] = product.images;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#e9dfd7] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(77,48,34,0.12)]">
      <Link href={product.href} className="flex h-full flex-col">
        <div className="relative overflow-hidden bg-white px-6 pb-4 pt-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full border border-[#d9c8bb] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#7f695b]">
              {categoryLabel ?? product.category}
            </span>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-[280px]">
            <img
              src={primaryImage}
              alt={product.title}
              className={`absolute inset-0 h-full w-full object-contain transition-all duration-500 group-hover:scale-[1.03] ${
                secondaryImage ? 'group-hover:opacity-0' : ''
              }`}
            />
            {secondaryImage ? (
              <img
                src={secondaryImage}
                alt={`${product.title} detail`}
                className="absolute inset-0 h-full w-full object-contain opacity-0 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
              />
            ) : null}
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-[linear-gradient(180deg,#fff_0%,#f7f1eb_100%)] px-6 pb-6 pt-5">
          <div className="min-h-[9.5rem]">
            <h3 className="min-h-[4.5em] text-[clamp(1.125rem,1rem+0.45vw,1.5625rem)] font-semibold leading-[1.12] text-[#2d1e17]">
              {product.title}
            </h3>
            <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#6f5a4e]">{product.shortDescription}</p>
          </div>

          <div className="mb-4 mt-4 flex flex-wrap gap-2">
            {(product.variants as readonly string[]).map((variant: string) => (
              <span
                key={variant}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#785f51] ring-1 ring-[#eadfd5]"
              >
                {variant}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-[#efe4db] pt-5">
            <div className="min-w-0">
              <div className="text-2xl font-semibold text-[#2d1e17]">{product.price}</div>
              {product.compareAtPrice ? (
                <div className="mt-1 text-sm text-[#9f8b7e] line-through">{product.compareAtPrice}</div>
              ) : null}
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                addItem(product);
              }}
              aria-label={`Přidat do košíku: ${product.title}`}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#7d6558] transition-colors duration-300 hover:text-[#bf4430]"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
            <span className="ml-auto rounded-[0.65rem] bg-[#3a342f] px-3.5 py-2 text-[0.78rem] font-medium text-white transition-colors duration-300 group-hover:bg-[#2d2723]">
              Detail produktu
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

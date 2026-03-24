import Link from 'next/link';

import type { CzProduct } from '@/data/czProducts';

type ProductCardProps = {
  product: CzProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const [primaryImage, secondaryImage] = product.images;
  const isExternal = product.href.startsWith('http');
  const cardClassName =
    'group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#e9dfd7] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(77,48,34,0.12)]';

  const cardInner = (
    <>
      <div className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#f7f1eb_100%)] px-6 pb-4 pt-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full border border-[#d9c8bb] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#7f695b]">
            {product.category}
          </span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#b0917e]">
            {secondaryImage ? '2 obrázky' : 'Detail'}
          </span>
        </div>

        <div className="relative mx-auto h-72 w-full max-w-[280px]">
          <img
            src={primaryImage}
            alt={product.title}
            className="absolute inset-0 h-full w-full object-contain transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
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

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3 className="text-2xl font-semibold leading-tight text-[#2d1e17]">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6f5a4e]">{product.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.variants.map((variant) => (
            <span
              key={variant}
              className="rounded-full bg-[#f5eee8] px-3 py-1 text-xs font-medium text-[#785f51]"
            >
              {variant}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#efe4db] pt-5">
          <div>
            <div className="text-2xl font-semibold text-[#2d1e17]">{product.price}</div>
            {product.compareAtPrice ? (
              <div className="mt-1 text-sm text-[#9f8b7e] line-through">{product.compareAtPrice}</div>
            ) : null}
          </div>
          <span className="text-sm font-medium text-[#a5513a] transition-transform duration-300 group-hover:translate-x-1">
            Detail produktu
          </span>
        </div>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a href={product.href} target="_blank" rel="noreferrer" className={cardClassName}>
        {cardInner}
      </a>
    );
  }

  return (
    <Link href={product.href} className={cardClassName}>
      {cardInner}
    </Link>
  );
}

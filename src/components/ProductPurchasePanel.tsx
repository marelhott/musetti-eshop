'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

import { useCart } from '@/components/CartProvider';
import type { CatalogProduct } from '@/data/catalog';

type ProductPurchasePanelProps = {
  product: CatalogProduct;
  stockLabel?: string;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductPurchasePanel({
  product,
  stockLabel,
}: ProductPurchasePanelProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="rounded-[1.75rem] border border-[#eadfd5] bg-white p-6">
      <p className="text-[11px] uppercase tracking-[0.24em] text-[#9b7f70]">Cena</p>
      <div className="mt-3 text-[2.2rem] font-semibold text-[#2d1e17]">{product.price}</div>
      {product.compareAtPrice ? (
        <div className="mt-2 text-sm text-[#9f8b7e] line-through">{product.compareAtPrice}</div>
      ) : null}
      {stockLabel ? (
        <div className="mt-4 inline-flex rounded-full bg-[#eef8f1] px-3 py-1 text-base font-medium text-[#2b8a57]">
          {stockLabel}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="inline-flex items-center overflow-hidden rounded-[1rem] border border-[#e6d9cf] bg-white">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="px-4 py-3 text-[#5d4a40] transition-colors hover:bg-[#f6efe9]"
            aria-label={`Snížit množství: ${product.title}`}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-12 px-3 text-center text-sm font-medium text-[#2d1e17]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            className="px-4 py-3 text-[#5d4a40] transition-colors hover:bg-[#f6efe9]"
            aria-label={`Zvýšit množství: ${product.title}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            for (let index = 0; index < quantity; index += 1) {
              addItem(product);
            }
          }}
          className="inline-flex items-center justify-center rounded-[1rem] bg-[#bf4430] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a93a29]"
        >
          Přidat do košíku
        </button>
      </div>

      <div className="mt-5 border-t border-[#efe4db] pt-4">
        <div className="flex items-center justify-between text-sm text-[#7b675c]">
          <span>Součet</span>
          <span className="text-lg font-semibold text-[#2d1e17]">
            {formatCurrency(product.priceCzk * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}

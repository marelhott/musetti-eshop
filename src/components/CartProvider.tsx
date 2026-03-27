'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';

import type { CatalogProduct } from '@/data/catalog';

type CartItem = {
  product: CatalogProduct;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (product: CatalogProduct) => void;
  decreaseItem: (productId: string) => void;
  increaseItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CART_STORAGE_KEY = 'musetti-cart';

const CartContext = createContext<CartContextValue | null>(null);

function formatCurrency(value: number) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(value);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        setItems(JSON.parse(storedCart) as CartItem[]);
      }
    } catch {
      // Ignore corrupted local storage and start with an empty cart.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [isHydrated, items]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const api = useMemo<CartContextValue>(() => {
    const updateQuantity = (productId: string, delta: number) => {
      setItems((currentItems) =>
        currentItems
          .map((item) =>
            item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item,
          )
          .filter((item) => item.quantity > 0),
      );
    };

    return {
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.product.priceCzk * item.quantity, 0),
      isOpen,
      addItem: (product) => {
        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.product.id === product.id);

          if (existingItem) {
            return currentItems.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            );
          }

          return [...currentItems, { product, quantity: 1 }];
        });
        setIsOpen(true);
      },
      decreaseItem: (productId) => updateQuantity(productId, -1),
      increaseItem: (productId) => updateQuantity(productId, 1),
      removeItem: (productId) =>
        setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId)),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [isOpen, items]);

  return (
    <CartContext.Provider value={api}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

function CartDrawer() {
  const { closeCart, decreaseItem, increaseItem, isOpen, items, removeItem, subtotal } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[90] transition-all duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Zavřít košík"
        onClick={closeCart}
        className={`absolute inset-0 bg-[#201711]/45 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[30rem] flex-col bg-white shadow-[-18px_0_40px_rgba(45,30,23,0.12)] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#ece4dd] px-6 py-5">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#9f7a68]">Musetti store</p>
            <h2 className="mt-1 text-[1.45rem] font-semibold text-[#2d1e17]">Košík</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Zavřít košík"
            className="rounded-full border border-[#ece4dd] p-2 text-[#59473f] transition-colors hover:border-[#d4c0b2] hover:text-[#2d1e17]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="rounded-full bg-[#f7f1eb] p-4 text-[#8c6a58]">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <p className="mt-5 text-lg font-medium text-[#2d1e17]">Košík je zatím prázdný</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#7b675c]">
                Přidej si kávu přímo z karty produktu a hned uvidíš součet i možnost změnit množství.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="rounded-[1.5rem] border border-[#ece4dd] bg-[#fcfaf8] p-4">
                  <div className="flex gap-4">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.25rem] bg-white p-3">
                      <img src={product.images[0]} alt={product.title} className="h-full w-full object-contain" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium leading-5 text-[#2d1e17]">{product.title}</p>
                      <p className="mt-1 text-sm text-[#7b675c]">
                        {(product.variants as readonly string[]).join(' / ')}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center overflow-hidden rounded-[0.9rem] border border-[#e6d9cf] bg-white">
                          <button
                            type="button"
                            onClick={() => decreaseItem(product.id)}
                            className="px-3 py-2 text-[#5d4a40] transition-colors hover:bg-[#f6efe9]"
                            aria-label={`Snížit množství: ${product.title}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 px-2 text-center text-sm font-medium text-[#2d1e17]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => increaseItem(product.id)}
                            className="px-3 py-2 text-[#5d4a40] transition-colors hover:bg-[#f6efe9]"
                            aria-label={`Zvýšit množství: ${product.title}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          className="text-sm text-[#8a6a59] underline-offset-4 transition-colors hover:text-[#a5513a] hover:underline"
                        >
                          Odstranit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#ece4dd] pt-4">
                    <p className="text-sm text-[#7b675c]">
                      {formatCurrency(product.priceCzk)} / ks
                    </p>
                    <p className="text-lg font-semibold text-[#2d1e17]">
                      {formatCurrency(product.priceCzk * quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#ece4dd] bg-white px-6 py-5">
          <div className="flex items-center justify-between text-sm text-[#7b675c]">
            <span>Mezisoučet</span>
            <span className="text-base font-semibold text-[#2d1e17]">{formatCurrency(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-[1rem] bg-[#bf4430] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#a93a29]"
          >
            Pokladna
          </button>
        </div>
      </aside>
    </div>
  );
}

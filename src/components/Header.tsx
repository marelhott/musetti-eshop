'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { catalogCategories } from '@/data/catalog';

const brandNavigationItems = [
  { href: '/chi-siamo', label: 'O nás' },
  { href: '/qualita', label: 'Kvalita' },
  { href: '/contatti', label: 'HoReCa / B2B' },
  { href: '/contatti', label: 'Kontakt' },
];

const coffeeMatchers = [
  'caffe-in-grani',
  'caffe-macinato',
  'cialde-compostabili',
  'capsule-compatibili-nespresso',
  'capsule-compatibili-lavazza-a-modo-mio',
  'capsule-compatibili-nescafe-dolce-gusto',
];

const machineMatchers = ['macchine-da-caffe', 'macchine-caffe-delonghi'];
const accessoryMatchers = ['tazzine-e-accessori'];
const gourmetOrder = [
  'te-e-infusi',
  'cioccolate-calde',
  'biscotti',
  'cioccolatini',
  'bagai',
  'zaba',
];
const preferredCoffeeOrder = [
  'caffe-in-grani',
  'caffe-macinato',
  'cialde-compostabili',
  'capsule-compatibili-nespresso',
];

function matchesAny(categoryId: string, matchers: string[]) {
  return matchers.some((matcher) => categoryId.includes(matcher));
}

function sortOrderedCategories<T extends { id: string; label: string }>(
  categories: readonly T[],
  order: readonly string[],
) {
  return [...categories].sort((a, b) => {
    const aIndex = order.indexOf(a.id);
    const bIndex = order.indexOf(b.id);
    const safeA = aIndex === -1 ? order.length : aIndex;
    const safeB = bIndex === -1 ? order.length : bIndex;

    if (safeA !== safeB) {
      return safeA - safeB;
    }

    return a.label.localeCompare(b.label, 'cs');
  });
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [mobileBrandOpen, setMobileBrandOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);

  const groupedCatalog = useMemo(() => {
    return {
      coffee: sortOrderedCategories(
        catalogCategories.filter((category) => matchesAny(category.id, coffeeMatchers)),
        preferredCoffeeOrder,
      ),
      machines: catalogCategories.filter((category) => matchesAny(category.id, machineMatchers)),
      accessories: catalogCategories.filter((category) => matchesAny(category.id, accessoryMatchers)),
      gourmet: sortOrderedCategories(
        catalogCategories.filter((category) => gourmetOrder.includes(category.id)),
        gourmetOrder,
      ),
    };
  }, []);

  const desktopMenuClassName = (menuKey: string, minWidthClassName: string) =>
    [
      'absolute left-1/2 top-full z-20 -translate-x-1/2 pt-4 transition-all duration-150',
      minWidthClassName,
      activeDesktopMenu === menuKey
        ? 'visible opacity-100 pointer-events-auto'
        : 'invisible opacity-0 pointer-events-none',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 border-b border-[#ece4dd] bg-white">
      <div className="container mx-auto grid h-[74px] grid-cols-[auto_1fr_auto] items-center gap-6 px-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://ext.same-assets.com/721295644/1917089157.png"
            alt="Musetti Logo"
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-6 md:flex lg:gap-8">
          <Link href="/akce" className="text-[0.92rem] font-semibold tracking-[0.12em] text-[#c92b38] transition-colors hover:text-[#a5513a]">
            AKCE!
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setActiveDesktopMenu('coffee')}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <button
              type="button"
              onFocus={() => setActiveDesktopMenu('coffee')}
              className="text-[0.95rem] font-medium text-[#2d1e17] transition-colors hover:text-[#a5513a]"
            >
              Káva
            </button>
            <div className={desktopMenuClassName('coffee', 'min-w-[320px]')}>
              <div className="rounded-[1.5rem] border border-[#ece4dd] bg-white p-3 shadow-[0_22px_60px_rgba(77,48,34,0.12)]">
                <div className="flex flex-col gap-1">
                  {groupedCatalog.coffee.map((item) => (
                    <Link
                      key={item.id}
                      href={item.pageHref}
                      className="rounded-xl px-3 py-2 text-[#2d1e17] transition-colors hover:bg-[#faf5f0] hover:text-[#a5513a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveDesktopMenu('gourmet')}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <button
              type="button"
              onFocus={() => setActiveDesktopMenu('gourmet')}
              className="text-[0.95rem] font-medium text-[#2d1e17] transition-colors hover:text-[#a5513a]"
            >
              Gurmánské produkty
            </button>
            <div className={desktopMenuClassName('gourmet', 'min-w-[320px]')}>
              <div className="rounded-[1.5rem] border border-[#ece4dd] bg-white p-3 shadow-[0_22px_60px_rgba(77,48,34,0.12)]">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/gurmanske-produkty"
                    className="rounded-xl px-3 py-2 font-medium text-[#a5513a] transition-colors hover:bg-[#faf5f0]"
                  >
                    Všechny gurmánské produkty
                  </Link>
                  {groupedCatalog.gourmet.map((item) => (
                    <Link
                      key={item.id}
                      href={item.pageHref}
                      className="rounded-xl px-3 py-2 text-[#2d1e17] transition-colors hover:bg-[#faf5f0] hover:text-[#a5513a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {groupedCatalog.accessories[0] ? (
            <Link
              href={groupedCatalog.accessories[0].pageHref}
              className="text-[0.95rem] font-medium text-[#2d1e17] transition-colors hover:text-[#a5513a]"
            >
              Šálky a doplňky
            </Link>
          ) : null}

          <div
            className="relative"
            onMouseEnter={() => setActiveDesktopMenu('machines')}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <button
              type="button"
              onFocus={() => setActiveDesktopMenu('machines')}
              className="text-[0.95rem] font-medium text-[#2d1e17] transition-colors hover:text-[#a5513a]"
            >
              Kávovary
            </button>
            <div className={desktopMenuClassName('machines', 'min-w-[280px]')}>
              <div className="rounded-[1.5rem] border border-[#ece4dd] bg-white p-3 shadow-[0_22px_60px_rgba(77,48,34,0.12)]">
                <div className="flex flex-col gap-1">
                  {groupedCatalog.machines.map((item) => (
                    <Link
                      key={item.id}
                      href={item.pageHref}
                      className="rounded-xl px-3 py-2 text-[#2d1e17] transition-colors hover:bg-[#faf5f0] hover:text-[#a5513a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveDesktopMenu('brand')}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <button
              type="button"
              onFocus={() => setActiveDesktopMenu('brand')}
              className="text-[0.95rem] font-medium text-[#6f5a4e] transition-colors hover:text-[#a5513a]"
            >
              Informace
            </button>
            <div className={desktopMenuClassName('brand', 'min-w-[220px]')}>
              <div className="rounded-[1.5rem] border border-[#ece4dd] bg-white p-3 shadow-[0_22px_60px_rgba(77,48,34,0.12)]">
                <div className="flex flex-col gap-1">
                  {brandNavigationItems.map((item) => (
                    <Link
                      key={`${item.href}-${item.label}`}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-[#2d1e17] transition-colors hover:bg-[#faf5f0] hover:text-[#a5513a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:block" />

        <button
          className="justify-self-end md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-site-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#2d1e17]" /> : <Menu className="h-6 w-6 text-[#2d1e17]" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-site-menu" className="border-t border-[#ece4dd] bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-5">
            <Link href="/akce" className="font-semibold text-[#c92b38]" onClick={() => setMobileMenuOpen(false)}>
              AKCE!
            </Link>

            <div>
              <button
                onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                className="w-full text-left font-medium text-[#2d1e17]"
              >
                Sortiment
              </button>
              {mobileCatalogOpen && (
                <div className="mt-3 flex flex-col gap-4 pl-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#8d7c70]">Káva</div>
                    <div className="mt-2 flex flex-col gap-2">
                      {groupedCatalog.coffee.map((item) => (
                        <Link key={item.id} href={item.pageHref} className="text-[#2d1e17]" onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#8d7c70]">Gurmánské produkty</div>
                    <div className="mt-2 flex flex-col gap-2">
                      <Link href="/gurmanske-produkty" className="text-[#a5513a]" onClick={() => setMobileMenuOpen(false)}>
                        Všechny gurmánské produkty
                      </Link>
                      {groupedCatalog.gourmet.map((item) => (
                        <Link key={item.id} href={item.pageHref} className="text-[#2d1e17]" onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {groupedCatalog.accessories[0] ? (
                    <Link href={groupedCatalog.accessories[0].pageHref} className="text-[#2d1e17]" onClick={() => setMobileMenuOpen(false)}>
                      Šálky a doplňky
                    </Link>
                  ) : null}

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#8d7c70]">Kávovary</div>
                    <div className="mt-2 flex flex-col gap-2">
                      {groupedCatalog.machines.map((item) => (
                        <Link key={item.id} href={item.pageHref} className="text-[#2d1e17]" onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileBrandOpen(!mobileBrandOpen)}
                className="w-full text-left font-medium text-[#2d1e17]"
              >
                Informace
              </button>
              {mobileBrandOpen && (
                <div className="mt-3 flex flex-col gap-2 pl-4">
                  {brandNavigationItems.map((item) => (
                    <Link key={`${item.href}-${item.label}`} href={item.href} className="text-[#6f5a4e]" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

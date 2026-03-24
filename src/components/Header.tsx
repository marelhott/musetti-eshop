'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { catalogCategories } from '@/data/catalog';

const brandNavigationItems = [
  { href: '/chi-siamo', label: 'O nás' },
  { href: '/qualita', label: 'Kvalita' },
  { href: '/#horeca', label: 'HoReCa / B2B' },
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

function matchesAny(categoryId: string, matchers: string[]) {
  return matchers.some((matcher) => categoryId.includes(matcher));
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [mobileBrandOpen, setMobileBrandOpen] = useState(false);

  const groupedCatalog = useMemo(() => {
    return {
      coffee: catalogCategories.filter((category: (typeof catalogCategories)[number]) =>
        matchesAny(category.id, coffeeMatchers),
      ),
      machines: catalogCategories.filter((category: (typeof catalogCategories)[number]) =>
        matchesAny(category.id, machineMatchers),
      ),
      accessories: catalogCategories.filter((category: (typeof catalogCategories)[number]) =>
        matchesAny(category.id, accessoryMatchers),
      ),
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#efe4db] bg-white/95 backdrop-blur">
        <div className="container flex items-center justify-between gap-6 px-0 py-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://ext.same-assets.com/721295644/1917089157.png"
              alt="Musetti Logo"
              className="h-12"
            />
          </Link>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="space-y-1.5">
              <div className="h-0.5 w-6 bg-[#e42842]"></div>
              <div className="h-0.5 w-6 bg-[#e42842]"></div>
              <div className="h-0.5 w-6 bg-[#e42842]"></div>
            </div>
          </button>

          <nav className="hidden flex-1 items-center justify-end gap-7 text-sm md:flex">
            <Link href="/akce" className="font-semibold tracking-[0.12em] text-[#d94b4b] transition-colors hover:text-[#b72828]">
              AKCE!
            </Link>

            <div className="group relative">
              <button className="font-medium text-[#2d1e17] transition-colors hover:text-[#e42842]">
                Káva
              </button>
              <div className="invisible absolute left-0 top-full mt-4 min-w-[320px] rounded-[1.5rem] border border-[#eadfd5] bg-white p-3 opacity-0 shadow-[0_22px_60px_rgba(77,48,34,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="flex flex-col gap-1">
                  {groupedCatalog.coffee.map((item: (typeof groupedCatalog.coffee)[number]) => (
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

            <Link
              href="/gurmanske-produkty"
              className="font-medium text-[#2d1e17] transition-colors hover:text-[#e42842]"
            >
              Gurmánské produkty
            </Link>

            {groupedCatalog.accessories[0] ? (
              <Link
                href={groupedCatalog.accessories[0].pageHref}
                className="font-medium text-[#2d1e17] transition-colors hover:text-[#e42842]"
              >
                Šálky a doplňky
              </Link>
            ) : null}

            <div className="group relative">
              <button className="font-medium text-[#2d1e17] transition-colors hover:text-[#e42842]">
                Kávovary
              </button>
              <div className="invisible absolute left-0 top-full mt-4 min-w-[280px] rounded-[1.5rem] border border-[#eadfd5] bg-white p-3 opacity-0 shadow-[0_22px_60px_rgba(77,48,34,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="flex flex-col gap-1">
                  {groupedCatalog.machines.map((item: (typeof groupedCatalog.machines)[number]) => (
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

            <div className="group relative">
              <button className="font-medium text-[#2d1e17] transition-colors hover:text-[#e42842]">
                Informace
              </button>
              <div className="invisible absolute right-0 top-full mt-4 min-w-[220px] rounded-[1.5rem] border border-[#eadfd5] bg-white p-3 opacity-0 shadow-[0_22px_60px_rgba(77,48,34,0.08)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="flex flex-col gap-1">
                  {brandNavigationItems.map((item: { href: string; label: string }) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-[#2d1e17] transition-colors hover:bg-[#faf5f0] hover:text-[#a5513a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="border-t bg-white md:hidden">
            <nav className="container flex flex-col gap-4 px-0 py-4">
              <Link href="/akce" className="font-semibold text-[#d94b4b]" onClick={() => setMobileMenuOpen(false)}>
                AKCE!
              </Link>

              <div>
                <button
                  onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                  className="w-full text-left font-medium text-[#2d1e17]"
                >
                  Sortiment podle skupin
                </button>
                {mobileCatalogOpen && (
                  <div className="mt-3 flex flex-col gap-4 pl-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[#9f8575]">Káva</div>
                      <div className="mt-2 flex flex-col gap-2">
                        {groupedCatalog.coffee.map((item: (typeof groupedCatalog.coffee)[number]) => (
                          <Link
                            key={item.id}
                            href={item.pageHref}
                            className="text-[#2d1e17] hover:text-[#e42842]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[#9f8575]">Kávovary</div>
                      <div className="mt-2 flex flex-col gap-2">
                        {groupedCatalog.machines.map((item: (typeof groupedCatalog.machines)[number]) => (
                          <Link
                            key={item.id}
                            href={item.pageHref}
                            className="text-[#2d1e17] hover:text-[#e42842]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/gurmanske-produkty"
                      className="text-[#2d1e17] hover:text-[#e42842]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Gurmánské produkty
                    </Link>

                    {groupedCatalog.accessories[0] ? (
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-[#9f8575]">Šálky a doplňky</div>
                        <div className="mt-2 flex flex-col gap-2">
                          <Link
                            href={groupedCatalog.accessories[0].pageHref}
                            className="text-[#2d1e17] hover:text-[#e42842]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {groupedCatalog.accessories[0].label}
                          </Link>
                        </div>
                      </div>
                    ) : null}
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
                    {brandNavigationItems.map((item: { href: string; label: string }) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-[#2d1e17] hover:text-[#e42842]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
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
    </>
  );
}

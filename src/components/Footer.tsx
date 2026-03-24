import Link from 'next/link';

import { catalogCategories, featuredCategories } from '@/data/catalog';

export default function Footer() {
  const footerLinks = catalogCategories.map((category: (typeof catalogCategories)[number]) => ({
    href: category.pageHref,
    label: category.label,
  }));

  return (
    <footer className="bg-[#201510] py-14 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <img
              src="https://ext.same-assets.com/721295644/1917089157.png"
              alt="Musetti Logo"
              className="mb-5 h-12 brightness-0 invert"
            />
            <p className="max-w-md text-sm leading-6 text-white/70">
              Koncept storefrontu, který převádí český sortiment Caffè Musetti do jasné struktury
              podle reálného nákupního chování zákazníka.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Sortiment</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              {footerLinks.map((link: { href: string; label: string }) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Další kroky</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              <Link href="/#horeca" className="transition-colors hover:text-white">
                HoReCa / B2B blok
              </Link>
              <Link href="/contatti" className="transition-colors hover:text-white">
                Kontakt a poptávka
              </Link>
              <Link href="/sortiment" className="transition-colors hover:text-white">
                Otevřít katalog
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Caffè Musetti storefront concept for CZ market.</p>
          <p>Kategorie i produktové detaily už běží přímo uvnitř projektu.</p>
        </div>
      </div>
    </footer>
  );
}

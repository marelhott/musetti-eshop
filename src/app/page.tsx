import Link from 'next/link';

import { ProductCard } from '@/components/ProductCard';
import { coffeeCategories, czProducts } from '@/data/czProducts';

export const dynamic = 'force-dynamic';

export default function Home() {
  const groupedProducts = coffeeCategories.map((category) => ({
    ...category,
    products: czProducts.filter((product) => product.categoryId === category.id),
  }));
  const categoryBenefits: Record<string, string[]> = {
    beans: ['Espresso směsi', 'Domácí i profi použití', 'Silná vizuální identita'],
    capsules: ['10 a 50 ks', 'Rychlá orientace podle směsi', 'Recyklovatelný formát'],
    pods: ['Kompostovatelné řešení', '18 až 100 ks', 'Čistá a rychlá příprava'],
    ground: ['Moka a domácí rytmus', 'Nižší vstupní cena', 'Praktická menší balení'],
  };

  return (
    <>
      {/* Hero Section with Wave */}
      <section className="relative bg-gradient-to-br from-[#c990a5] via-[#b87a95] to-[#a86585] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://www.musetti.it/wp-content/uploads/2023/05/layout-miscela_Onda-BG_Armonico.png')" }}
        />
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center md:text-left">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/75 animate-fadeInUp">
                Caffè Musetti pro domácí chvíle i rituály
              </p>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fadeInUp">
                NOVÁ PODOBA, JEŠTĚ VÍCE CHUTI!
              </h1>
              <p className="text-xl md:text-3xl font-light animate-fadeInUp">
                Celý český sortiment Caffè Musetti přeuspořádaný do jasného systému, kterému klient okamžitě rozumí.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.18em] text-white/90">
                  13 aktivních produktů
                </span>
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.18em] text-white/90">
                  4 hlavní kategorie
                </span>
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm uppercase tracking-[0.18em] text-white/90">
                  Obrázky z IT storefrontu
                </span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link href="/#zrnkova-kava" className="rounded-full bg-white px-6 py-3 font-semibold text-[#8f4f69] transition-transform hover:scale-105">
                  Projít kategorie
                </Link>
                <Link href="/#kapsle-nespresso" className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#8f4f69]">
                  Kapsle a pody
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-center justify-center">
              <img
                src="https://www.musetti.it/wp-content/uploads/2023/06/Pack_gentile_DEF.webp"
                alt="Gentile balení"
                className="absolute left-0 top-10 h-52 w-auto object-contain drop-shadow-2xl animate-gentleFloat md:h-72"
              />
              <img
                src="https://www.musetti.it/wp-content/uploads/2023/06/layout-miscela_Pack_armonico_DEF.webp"
                alt="Armonico balení"
                className="relative z-10 h-72 w-auto object-contain drop-shadow-2xl animate-softPulse md:h-[26rem]"
              />
              <img
                src="https://www.musetti.it/wp-content/uploads/2023/06/Pack_Intenso_DEF.webp"
                alt="Intenso balení"
                className="absolute bottom-0 right-0 h-56 w-auto object-contain drop-shadow-2xl animate-gentleFloat md:h-80"
              />
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#faf8f8"></path>
          </svg>
        </div>
      </section>

      <section className="sticky top-[88px] z-40 border-y border-[#efe3db] bg-white/90 backdrop-blur md:top-[92px]">
        <div className="container mx-auto flex gap-3 overflow-x-auto px-4 py-3">
          {groupedProducts.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="whitespace-nowrap rounded-full border border-[#decfc4] bg-[#fbf6f1] px-4 py-2 text-sm font-medium text-[#5f4a3d] transition-colors hover:border-[#c7b3a4] hover:bg-white"
            >
              {category.label}
            </a>
          ))}
        </div>
      </section>

      {/* Category System */}
      <section className="bg-[#faf8f8] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#9f8575]">
              Přehledný systém pro klienta
            </p>
            <h2 className="text-4xl font-bold text-[#35251d] md:text-6xl">Hlavní druhy kávy</h2>
            <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-600 md:text-lg">
              Rozdělení už není podle jednotlivých blendů, ale podle toho, jak klient opravdu nakupuje:
              zrnková káva, kapsle Nespresso, pody a mletá káva. Každá sekce má vlastní vstup,
              vlastní text a vlastní produktový přehled.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {groupedProducts.map((category, index) => (
              <a
                key={category.id}
                href={category.href}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br ${category.panelClassName} p-7 shadow-[0_24px_70px_rgba(95,61,46,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(95,61,46,0.12)]`}
              >
                <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full border border-[#d7c9bf] bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#7d685a]">
                        {category.shortNote}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.24em] text-[#9f8575]">
                        Kategorie {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="max-w-[16ch] text-3xl font-semibold leading-tight text-[#2d1e17] md:text-4xl">
                      {category.label}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#6c584c]">
                      {category.headline}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#8b7769]">
                      {category.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {categoryBenefits[category.id].map((benefit) => (
                        <span
                          key={benefit}
                          className="rounded-full bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#6b5649]"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#2d1e17] px-5 py-3 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
                      <span>Přejít do sekce</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>

                  <div className="relative min-h-[260px]">
                    {category.heroImages.map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={category.label}
                        className={`absolute object-contain drop-shadow-[0_28px_38px_rgba(0,0,0,0.12)] ${
                          imageIndex === 0
                            ? 'left-0 top-0 h-44 md:h-52 animate-gentleFloat'
                            : imageIndex === 1
                              ? 'left-1/2 top-8 z-10 h-52 -translate-x-1/2 md:h-64 animate-softPulse'
                              : 'bottom-0 right-0 h-40 md:h-52 animate-gentleFloat'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5eee8] py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f70]">Jasná orientace</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#2d1e17]">Klient neřeší blendy jako první</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f5a4e]">
                Nejprve vybírá formát nákupu. Proto je homepage postavená kolem typů kávy, ne kolem interní značkové nomenklatury.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f70]">Marketingový systém</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#2d1e17]">Každá sekce vysvětluje proč existuje</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f5a4e]">
                U každé kategorie je důvod, pro koho je určená, kolik má produktů a jakou roli hraje v nabídce.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#9b7f70]">Vizuální kontinuita</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#2d1e17]">Italské assety, česká obchodní logika</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f5a4e]">
                Obrázky a produktové galerie čerpají maximum z italské verze, ale obsahově je vše poskládané podle českého e-shopu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#9f8575]">
              Kompletní český sortiment
            </p>
            <h2 className="text-4xl font-bold text-[#2d1e17] md:text-6xl">
              Všechny produkty, které dnes běží na musettishop.cz
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#6f5a4e] md:text-lg">
              Každá kategorie má vlastní blok, vlastní důvod existence a vlastní produktový grid.
              Vizuály berou maximum z italské verze, ale logika řazení i texty vychází z českého e-shopu,
              aby byl návrh srozumitelný, obchodně použitelný a přehledný pro klienta.
            </p>
          </div>

          <div className="space-y-16">
            {groupedProducts.map((category) => (
              <section key={category.id} id={category.href.replace('#', '')} className="scroll-mt-24">
                <div className="mb-8 flex flex-col gap-4 border-b border-[#efe3db] pb-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.28em]" style={{ color: category.accent }}>
                      {category.label}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-[#2d1e17] md:text-5xl">
                      {category.headline}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#6f5a4e]">{category.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {categoryBenefits[category.id].map((benefit) => (
                        <span
                          key={benefit}
                          className="rounded-full bg-[#f6ede6] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#705d51]"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-6 text-[#836e61]">
                      {category.audience}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#f8f1eb] px-5 py-4 text-sm leading-6 text-[#7d6658]">
                    <strong className="block text-[#2d1e17]">{category.products.length} produktů</strong>
                    Klik na kartu teď vede na původní český detail produktu.
                    <a
                      href={category.shopUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#a5513a]"
                    >
                      Otevřít celou kategorii
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {category.products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2d1e17] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">Další krok</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Z tohohle už se dá jít přímo do finálního storefrontu
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-medium">Kategorie a filtrace</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Máme jasný základ pro reálné category pages, filtrování podle formátu, variant a chuťového profilu.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-medium">Produktové detaily</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Reálné galerie a hover vizuály už ukazují, jak se budou chovat produktové listy i detail produktu.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-medium">Obsahová vrstva</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  HoReCa, výhody, příběh značky i udržitelnost už mají svoje místo a dají se napojit na CMS.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-medium">Klientská editace</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Datový model je připravený tak, aby šel přenést do Medusy nebo Payloadu bez ručního chaosu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section with Wave */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#faf8f8"></path>
          </svg>
        </div>

        <div
          className="relative py-32 text-white text-center"
          style={{
            backgroundImage: 'url(https://ext.same-assets.com/721295644/1585074738.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">UDRŽITELNOST</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-4">
              Uvědomujeme si, jak důležité je chránit naši planetu i lidi, kteří na ní žijí,
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
              a proto s hrdostí sdílíme naše kroky směrem k odpovědnějšímu a udržitelnějšímu fungování.
              Prozkoumejte naši cestu k lepší budoucnosti a vychutnejte si oblíbenou kávu s vědomím, že i malá volba může mít velký dopad.
            </p>
            <Link href="/sostenibilita" className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2">
              <span>🌱</span>
              <span>Zjistit více</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Blog</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Prozkoumejte s námi svět kávy, kde každé zrnko ukrývá příběh vášně a poctivé práce.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src="https://ext.same-assets.com/721295644/1576366392.png"
                  alt="90 Anniversary"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1934–2024: 90 LET VÁŠNĚ PRO KÁVU</h3>
                <Link href="/blog" className="text-[#e42842] hover:underline inline-flex items-center gap-2 font-medium">
                  Číst více <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">›</span>
                </Link>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src="https://ext.same-assets.com/721295644/4253665504.png"
                  alt="Zero Impact"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ZERO IMPACT: NEKONEČNÁ ČERSTVOST, ŽÁDNÉ PLÝTVÁNÍ</h3>
                <Link href="/blog" className="text-[#e42842] hover:underline inline-flex items-center gap-2 font-medium">
                  Číst více <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Přidejte se do komunity</h2>
          <p className="text-gray-600 mb-8">
            Přihlaste se k newsletteru a mějte přehled o novinkách ze světa Caffè Musetti i o aktuálních akcích.
          </p>

          <div className="max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Váš e-mail"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#e42842]"
            />

            <div className="flex items-start gap-2 mb-6 text-sm text-left">
              <input type="checkbox" className="mt-1" />
              <label className="text-gray-600">
                Souhlasím se zpracováním osobních údajů podle článku 13 nařízení EU č. 679/2016.
              </label>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Více informací najdete v zásadách ochrany soukromí.
            </p>

            <button className="bg-[#e42842] text-white px-12 py-3 rounded-full hover:bg-[#c41f35] transition-colors font-semibold">
              Přihlásit se
            </button>
          </div>
        </div>
      </section>

      {/* Coffee Blends Section with Handwriting */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">Naše směsi</h2>
          <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
            Svět kávy tvoří mnoho aromat a chutí.
          </p>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Z tohoto světa jsme vytvořili naše cenné směsi určené pro domácí přípravu,
            každou jinou a každou s vlastním charakterem, aby si vybral opravdu každý.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Link href="/miscela-armonico" className="text-center">
              <div className="relative inline-block">
                <div className="text-xs mb-2">Vyváženě</div>
                <div className="text-5xl font-['Pacifico'] mb-2">That's</div>
                <div className="text-6xl font-['Pacifico']">Armonico</div>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#c990a5] opacity-50 rounded-full"></div>
              </div>
            </Link>

            <Link href="/miscela-intenso" className="text-center">
              <div className="relative inline-block">
                <div className="text-xs mb-2">Užijte si</div>
                <div className="text-5xl font-['Pacifico'] mb-2">Your</div>
                <div className="text-6xl font-['Pacifico']">Intenso</div>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#d4b8a0] opacity-50 rounded-full"></div>
              </div>
            </Link>

            <Link href="/miscela-gentile" className="text-center">
              <div className="relative inline-block">
                <div className="text-xs mb-2">Velmi</div>
                <div className="text-5xl font-['Pacifico'] mb-2">Very</div>
                <div className="text-6xl font-['Pacifico']">Gentile</div>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#f4e66c] opacity-50 rounded-full"></div>
              </div>
            </Link>

            <Link href="/miscela-deca" className="text-center">
              <div className="relative inline-block">
                <div className="text-xs mb-2">Dejte mi</div>
                <div className="text-5xl font-['Pacifico'] mb-2">a</div>
                <div className="text-6xl font-['Pacifico']">Deca</div>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#a0c4d4] opacity-50 rounded-full"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">PRODEJNY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prodejny <span className="italic">La Casa del Caffè Musetti</span> leží v srdci Piacenzy a vůně čerstvě pražených zrn se tu spojuje s přívětivou atmosférou v jedinečný zážitek.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Káva tu není jen nápoj, ale příběh, který sdílíme s opravdovou vášní.
              </p>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/721295644/1060917610.webp"
                alt="Musetti Store"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Storia() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 text-white text-center"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/721295644/719331954.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-xl mb-4">Velká umělecká díla trvají navždy.</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mým snem je vytvořit<br />kávu, která je skutečným uměním.
          </h1>
          <img
            src="https://ext.same-assets.com/721295644/3574833565.png"
            alt="Luigi Musetti Signature"
            className="mx-auto h-24"
          />
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="bg-white py-8 sticky top-[72px] z-40 border-b">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex gap-6 justify-center text-sm">
            <a href="#1934" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1934</a>
            <a href="#1946" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1946</a>
            <a href="#1950" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1950</a>
            <a href="#1960" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1960</a>
            <a href="#1962" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1962</a>
            <a href="#1973" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1973</a>
            <a href="#1980" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1980</a>
            <a href="#1997" className="hover:text-[#e42842] transition-colors whitespace-nowrap">1997</a>
            <a href="#2003" className="hover:text-[#e42842] transition-colors whitespace-nowrap">2003</a>
            <a href="#2013" className="hover:text-[#e42842] transition-colors whitespace-nowrap">2013</a>
            <a href="#2020" className="hover:text-[#e42842] transition-colors whitespace-nowrap">2020</a>
            <a href="#oggi" className="hover:text-[#e42842] transition-colors whitespace-nowrap">Dnes</a>
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* 1934 */}
          <div id="1934" className="mb-20 scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">1934, Začátky</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Luigi Musetti zakládá La Casa del Caffè</strong>, obchod v centru Piacenzy na adrese Via Garibaldi 14. <strong>Každý den připravuje první kávu Musetti</strong> s láskou a trpělivostí, jen s pomocí malého pražicího stroje. <strong>Jeho úsilí je odměněno spokojeností zákazníků.</strong>
                </p>
              </div>
              <div>
                <img
                  src="https://ext.same-assets.com/721295644/3627619776.webp"
                  alt="1934 - Le origini"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* 1946 */}
          <div id="1946" className="mb-20 scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">1946, Recept na úspěch</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://ext.same-assets.com/721295644/3627619776.webp"
                  alt="1946"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-700 leading-relaxed">
                  Dobré jméno firmy roste díky <strong>výjimečné kvalitě kávy Musetti</strong>. Luigi spolu s neúnavnou <strong>manželkou Dinou</strong> s vášní vybírá nejlepší zrna z různých částí světa, protože věří, že jen káva nejvyšší kvality může dát vzniknout skutečně výjimečnému nápoji.
                </p>
              </div>
            </div>
          </div>

          {/* 1950 */}
          <div id="1950" className="mb-20 scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">1950, Obnova po válce</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Během druhé světové války stát zastavuje dovoz kávy, což velmi komplikuje získávání suroviny. Pro Luigiho začíná těžké období plné námahy a nouze.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Naštěstí vše ustojí. Po válce si vyhrne rukávy a začíná podnik znovu rozvíjet. S pomocí manželky Diny a dětí Lucie a Achilleho využívá příležitost k růstu. Díky ikonické dodávce <strong>Giardinetta</strong> se distribuční síť kávy Musetti výrazně rozšiřuje.
                </p>
              </div>
              <div>
                <img
                  src="https://ext.same-assets.com/721295644/1491719815.webp"
                  alt="1950"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* 1960 */}
          <div id="1960" className="mb-20 scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">1960, Sen se stává realitou: vzniká Musetti jako firma</h2>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sen se naplňuje a z Musetti se stává skutečná firma. Ministr Umberto Tupini a senátor Alfredo Conti se účastní otevření <strong>nového sídla ve Viale Sant&apos;Ambrogio</strong>. Moderní provoz se stává jasným symbolem úspěchu a trvalého růstu.
              </p>
            </div>
          </div>

          {/* 1973 */}
          <div id="1973" className="mb-20 scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">1973, Dědictví, které je třeba chránit: odchod Luigiho</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://ext.same-assets.com/721295644/1756621152.webp"
                  alt="1973"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Toto období zasahuje smutná zpráva: <strong>Luigi umírá</strong> po těžké nemoci. Jeho žena <strong>Dina spolu s dětmi Lucií a Achillem</strong> pokračuje v podnikání dál. Během několika let se <strong>Musetti stává mezinárodním produktem</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* 2020 */}
          <div id="2020" className="mb-20 scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">2020, Směrem k novým rozměrům: Bonomi Spa</h2>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Akvizice společnosti Bonomi Spa ze strany Caffè Musetti představuje důležitý krok k vybudování silného kávového uskupení. Je to strategická příležitost, jak rozšířit dosah značky a propojit zdroje i zkušenosti obou firem.
              </p>
            </div>
          </div>

          {/* Oggi */}
          <div id="oggi" className="scroll-mt-32">
            <h2 className="text-4xl font-bold text-[#e42842] mb-6">Dnes</h2>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Luigiho sen dnes nenese jen jeho rodina, ale také zhruba stovka spolupracovníků, kteří firmě pomáhají růst. Spojuje je <strong>láska k dobré kávě a touha šířit její kulturu a hodnotu všude, kde to dává smysl</strong>.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

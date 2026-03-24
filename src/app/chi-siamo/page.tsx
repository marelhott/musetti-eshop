import Link from 'next/link';

export default function ChiSiamo() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-32 text-white text-center"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/721295644/2237558145.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            „Na čem záleží, je<br />láska a zkušenost.“
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-4">
            Velké věci vznikají z vášně.
          </p>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-4">
            A když je člověk dost odvážný žít pro to, čemu opravdu věří...
          </p>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8">
            všechno začne dávat smysl.<br />
            Snil jsem o vůni, o atmosféře,<br />
            o dobré kávě.“
          </p>
          <img
            src="https://ext.same-assets.com/721295644/2504071809.png"
            alt="Luigi Musetti Signature"
            className="mx-auto h-24"
          />
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Příběh Musetti začíná před devadesáti lety v Piacenze.<br />
            Dnes je značka přítomná v 60 zemích na pěti kontinentech.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jak jsme se k tomu dostali? Každodenní prací, vášní a odhodláním, tedy hodnotami, které tvoří základ každé naší směsi. Naše láska ke kávě zůstala po celá ta léta stejná a vedla nás k jedinému cíli: přinášet do šálku výjimečný produkt, který každému předá naši péči a oddanost.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Právě proto postupně vznikly jedinečné směsi schopné oslovit různé chutě i potřeby. Neustálé hledání kvality je základem všeho, co děláme, a potvrzují to i důsledné kontroly v celém výrobním procesu od výběru zelené kávy až po balení a distribuci.
              </p>
            </div>

            <div>
              <img
                src="https://ext.same-assets.com/721295644/3062374614.webp"
                alt="Musetti Espresso"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-6">Jsme poctivá firma, která věří v transparentnost:</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            od roku 2016 používáme systém SAP Business One pro řízení výrobních, administrativních i obchodních procesů. A pro finanční audit se opíráme o práci společnosti Deloitte, která ověřuje naše hospodaření.
          </p>

          <h3 className="text-3xl font-bold mb-6">Pro nás káva neznamená jen pečlivý výběr a pražení surovin.</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/721295644/2758616497.webp"
                alt="Musetti Community"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                Je to atmosféra, kultura i zážitek. Nápoj, který se přizpůsobuje různým okamžikům, protože kolem šálku kávy se odehrává a vypráví spousta příběhů. Nacházíme ho v hudbě, literatuře, malbě, divadle i filmu. Je součástí společenských rituálů v baru, restauraci i v soukromí domova.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Je to ale i univerzální jazyk míst a setkání. Ať jste u moře, v horách nebo ve městě, v Itálii či kdekoli jinde na světě, na dobrou kávu je vždy čas. V Musetti sledujeme vývoj této tradice ve všech jejích podobách a každoročně podporujeme mnoho aktivit, které propojují kulturu s naší velkou vášní.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storia e Qualità Cards */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Storia Card */}
            <div
              className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: 'url(https://ext.same-assets.com/721295644/4113885964.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-8">
                <h3 className="text-5xl font-bold mb-4">PŘÍBĚH</h3>
                <p className="mb-6 max-w-sm">
                  Každá hodnotná věc má svůj příběh.<br />
                  Ten náš se už po generace vypráví nad dobrým šálkem kávy.
                </p>
                <Link
                  href="/storia"
                  className="bg-[#e42842] text-white px-8 py-3 rounded-full hover:bg-[#c41f35] transition-colors font-semibold"
                >
                  ZJISTIT VÍCE
                </Link>
              </div>
            </div>

            {/* Qualità Card */}
            <div
              className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: 'url(https://ext.same-assets.com/721295644/2237558145.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-8">
                <h3 className="text-5xl font-bold mb-4">KVALITA</h3>
                <p className="mb-6 max-w-sm">
                  Pro někoho je to jen slovo. Pro nás je to filozofie, metoda i závazek. Každý den pracujeme tak, abychom nabízeli to nejlepší.
                </p>
                <Link
                  href="/qualita"
                  className="bg-[#e42842] text-white px-8 py-3 rounded-full hover:bg-[#c41f35] transition-colors font-semibold"
                >
                  ZJISTIT VÍCE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

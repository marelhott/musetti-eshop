import Link from 'next/link';

export default function Sostenibilita() {
  return (
    <>
      {/* Carousel Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-12">UDRŽITELNOST</h1>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-3xl font-bold mb-4">NÁŠ PŘÍSTUP K ŽIVOTNÍMU PROSTŘEDÍ</h3>
              <p className="text-gray-300 mb-6">
                Etický přístup, který pomáhá vytvářet odpovědný dodavatelský řetězec
              </p>
              <Link href="#ambiente" className="text-[#e42842] hover:underline">
                Zjistit více
              </Link>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-3xl font-bold mb-4">NÁŠ SPOLEČENSKÝ PŘÍNOS</h3>
              <p className="text-gray-300 mb-6">
                Etický přístup, který pomáhá vytvářet odpovědný dodavatelský řetězec
              </p>
              <Link href="#sociale" className="text-[#e42842] hover:underline">
                Zjistit více
              </Link>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-3xl font-bold mb-4">NAŠE ROZHODNUTÍ</h3>
              <p className="text-gray-300 mb-6">
                Etický přístup, který pomáhá vytvářet odpovědný dodavatelský řetězec
              </p>
              <Link href="#scelte" className="text-[#e42842] hover:underline">
                Zjistit více
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section id="ambiente" className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            NÁŠ PŘÍSTUP K ŽIVOTNÍMU PROSTŘEDÍ
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Uvědomujeme si, jak důležité je chránit naši planetu i lidi, kteří na ní žijí. Proto jsme zavedli řadu kroků, které pomáhají snižovat náš dopad na životní prostředí.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Od výběru certifikovaných dodavatelů až po optimalizaci výrobních procesů směřuje každé naše rozhodnutí k větší udržitelnosti.
              </p>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/721295644/1585074738.webp"
                alt="Sostenibilità"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="sociale" className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            NÁŠ SPOLEČENSKÝ PŘÍNOS
          </h2>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Věříme, že úspěch firmy se měří i tím, jaký má dopad na komunitu. Proto podporujeme sociální a kulturní projekty, které pomáhají rozvíjet místa i lidi kolem nás.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Od vzdělávání mladých až po podporu pěstitelských komunit je náš přístup dlouhodobý a konkrétní.
            </p>
          </div>
        </div>
      </section>

      {/* Choices Section */}
      <section id="scelte" className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            NAŠE ROZHODNUTÍ
          </h2>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-8">
              Každý den děláme vědomá rozhodnutí pro lepší budoucnost. Od kvalitativních certifikací až po odpovědné využívání zdrojů stojí udržitelnost v centru všeho, co děláme.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

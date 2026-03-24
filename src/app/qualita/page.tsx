import Link from 'next/link';

export default function Qualita() {
  return (
    <>
      <section 
        className="relative py-32 text-white text-center"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/721295644/4113885964.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">KVALITA</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Pro někoho je to jen slovo. Pro nás je to filozofie, metoda a povinnost.<br />
            Každý den pracujeme naplno, abychom nabízeli jen to nejlepší.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-8">Náš závazek ke kvalitě</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Pro Musetti znamená kvalita přísnou kontrolu v každé fázi výroby, od výběru zelených zrn přes pražení až po balení. Každý šálek kávy Musetti je výsledkem 90 let zkušeností a oddanosti.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Výběr</h3>
              <p className="text-gray-600">
                Pouze nejlepší zrna z ověřených plantáží
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-3">Pražení</h3>
              <p className="text-gray-600">
                Kontrolovaný proces, který nechává vyniknout jedinečným aromatům
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-3">Kontrola</h3>
              <p className="text-gray-600">
                Důsledné testování v každém kroku výroby
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">Objevte naše směsi</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/miscela-armonico" className="hover:scale-105 transition-transform">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/THATS_ARMONICO-1024x1024.webp" alt="Armonico" className="w-full" />
            </Link>
            <Link href="/miscela-intenso" className="hover:scale-105 transition-transform">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/ENJOY_YOUR_INTENSO-1200x1200.webp" alt="Intenso" className="w-full" />
            </Link>
            <Link href="/miscela-gentile" className="hover:scale-105 transition-transform">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/VERY_VERY_GENTILE-1200x1200.webp" alt="Gentile" className="w-full" />
            </Link>
            <Link href="/miscela-deca" className="hover:scale-105 transition-transform">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/GIVE_ME_A_DECA-1200x1200.webp" alt="Deca" className="w-full" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

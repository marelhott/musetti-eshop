import Link from 'next/link';

export default function MiscelaGentile() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4e66c] via-[#e6d85c] to-[#d8ca4c] py-16 text-gray-900 md:py-24">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.musetti.it/wp-content/uploads/2023/05/layout-miscela_Onda-BG_Gentile-1.png')" }} />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-black/55">Směs Musetti pro domov</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">VERY VERY<br/>GENTILE.</h1>
              <p className="text-2xl md:text-3xl font-light">
                Jemná a harmonická káva pro vytříbené chutě
              </p>
            </div>

            <div className="flex justify-center items-center gap-6 order-1 md:order-2">
              <img
                src="https://www.musetti.it/wp-content/uploads/2023/06/Pack_gentile_DEF.webp"
                alt="Balení směsi Gentile"
                className="w-5/12 max-w-xs object-contain drop-shadow-2xl animate-fadeInUp animate-gentleFloat"
              />
              <img
                src="https://www.musetti.it/wp-content/uploads/2023/06/VERY_VERY_GENTILE-1200x1200.webp"
                alt="Brand vizuál Gentile"
                className="w-5/12 max-w-xs object-contain drop-shadow-2xl animate-fadeInUp animate-softPulse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-32 flex items-center justify-center mb-8">
                <img src="https://www.musetti.it/wp-content/uploads/2023/05/Miscela_Gentile-e1685453803933.png" alt="Logotyp směsi Gentile" className="h-20 w-auto object-contain" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">SMĚS GENTILE</h2>
              <h3 className="text-2xl md:text-3xl text-gray-700 mb-8">
                Sladká a jemná káva s květinovými a ovocnými tóny
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                Směs z vybraných káv 100% Arabica, charakteristická aromatickými, ovocnými a sladkými tóny. Jemná chuť s delikátní kyselinkou hladí patro a zanechává bohatou, dlouhou dochuť. Je určená těm, kdo nechtějí dělat kompromisy a od kávy čekají jen to nejlepší, navíc s velmi nízkým obsahem kofeinu.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div>
                  <p className="font-semibold mb-3 text-lg">INTENZITA:</p>
                  <div className="flex gap-2 justify-center">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-[#d8ca4c]"></div>
                    ))}
                    {[4,5].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#d8ca4c]"></div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg"><span className="font-semibold">SLOŽENÍ:</span> 100% Arabica</p>
                </div>
              </div>

              <a
                href="https://musettishop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e42842] text-white px-16 py-4 rounded-full hover:bg-[#c41f35] transition-colors font-semibold inline-block text-lg"
              >
                Nakoupit nyní
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Note Predominanti */}
      <section className="bg-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Převládající <span className="text-[#e42842]">chuťové noty</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://www.musetti.it/wp-content/uploads/2023/05/layout-miscela_Agrumi.png" alt="Citrusy" className="w-40 h-40 mx-auto mb-6 object-contain" />
              <h3 className="text-3xl font-semibold">Citrusy</h3>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://www.musetti.it/wp-content/uploads/2023/05/layout-miscela_Mandorle.png" alt="Mandle" className="w-40 h-40 mx-auto mb-6 object-contain" />
              <h3 className="text-3xl font-semibold">Mandle</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Origins & Profile */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">Původ kávy</h3>
              <div className="bg-yellow-50 rounded-2xl p-8">
                <img src="https://www.musetti.it/wp-content/uploads/2023/05/Gentile_Mappa_Caffe-1200x698.webp" alt="Mapa původu kávy Gentile" className="w-full rounded-lg bg-white object-contain" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">Chuťový profil</h3>
              <div className="bg-yellow-50 rounded-2xl p-8">
                <img src="https://www.musetti.it/wp-content/uploads/2023/05/Gentile_Spiderchart-1024x800.webp" alt="Chuťový spider chart Gentile" className="w-full rounded-lg bg-white object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Naše <span className="text-[#e42842]">produktová řada</span>
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Různé formáty jedné směsi, které spojuje jediný jmenovatel: kvalita
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="hover:scale-105 transition-transform duration-300">
              <img src="https://www.musetti.it/wp-content/uploads/2023/05/layout-miscela_Gentile-Cialde_100-400x329.webp" alt="Gentile pody" className="mb-4 aspect-square w-full rounded-lg object-contain bg-white p-4 shadow-sm" />
              <p className="font-semibold text-lg">Pody</p>
            </div>

            <div className="hover:scale-105 transition-transform duration-300">
              <img src="https://www.musetti.it/wp-content/uploads/2023/05/Capsule_Gentile-1-200x384.webp" alt="Gentile kapsle" className="mb-4 aspect-square w-full rounded-lg object-contain bg-white p-4 shadow-sm" />
              <p className="font-semibold text-lg">Kapsle</p>
            </div>

            <div className="hover:scale-105 transition-transform duration-300">
              <img src="https://www.musetti.it/wp-content/uploads/2023/05/Macinato_Gentile-400x570.webp" alt="Gentile mletá káva" className="mb-4 aspect-square w-full rounded-lg object-contain bg-white p-4 shadow-sm" />
              <p className="font-semibold text-lg">Mletá</p>
            </div>

            <div className="hover:scale-105 transition-transform duration-300">
              <img src="https://www.musetti.it/wp-content/uploads/2023/05/Grani_Gentile-1-200x449.webp" alt="Gentile zrnková káva" className="mb-4 aspect-square w-full rounded-lg object-contain bg-white p-4 shadow-sm" />
              <p className="font-semibold text-lg">Zrnková</p>
            </div>
          </div>

          <a
            href="https://musettishop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e42842] text-white px-16 py-4 rounded-full hover:bg-[#c41f35] transition-colors font-semibold inline-block text-lg"
          >
            Nakoupit nyní
          </a>
        </div>
      </section>

      {/* Other Blends */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Naše další <span className="text-[#e42842]">směsi</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Svět kávy tvoří mnoho aromat a chutí. Z tohoto světa vznikly naše pečlivě vybrané směsi pro domácí přípravu, každá s vlastním charakterem, aby si v nich našel to své opravdu každý.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/miscela-armonico" className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-8 text-center">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/THATS_ARMONICO-1024x1024.webp" alt="Směs Armonico" className="mx-auto mb-4 h-48 w-48 object-contain" />
              <h3 className="text-3xl font-['Pacifico'] mb-2">Armonico</h3>
              <p className="text-sm text-gray-600">Vyvážená a krémová směs</p>
            </Link>

            <Link href="/miscela-intenso" className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 text-center">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/ENJOY_YOUR_INTENSO-400x400.webp" alt="Směs Intenso" className="mx-auto mb-4 h-48 w-48 object-contain" />
              <h3 className="text-3xl font-['Pacifico'] mb-2">Intenso</h3>
              <p className="text-sm text-gray-600">Silnější a plnější profil</p>
            </Link>

            <Link href="/miscela-deca" className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg p-8 text-center">
              <img src="https://www.musetti.it/wp-content/uploads/2023/06/GIVE_ME_A_DECA-400x400.webp" alt="Směs Deca" className="mx-auto mb-4 h-48 w-48 object-contain" />
              <h3 className="text-3xl font-['Pacifico'] mb-2">Deca</h3>
              <p className="text-sm text-gray-600">Bez kofeinu, bez kompromisu</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

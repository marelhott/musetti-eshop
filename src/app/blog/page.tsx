import Link from 'next/link';

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#c990a5] via-[#b87a95] to-[#a86585] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Prozkoumejte s námi svět kávy, kde každé zrnko ukrývá příběh vášně a poctivé práce.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Post 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://ext.same-assets.com/721295644/1576366392.png"
                alt="90 Anniversary"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1934–2024: 90 LET VÁŠNĚ PRO KÁVU</h3>
                <p className="text-gray-600 mb-4">
                  Cesta napříč 90 lety historie, vášně a oddanosti kvalitní kávě.
                </p>
                <a href="#" className="text-[#e42842] hover:underline inline-flex items-center gap-2">
                  Číst více <span>›</span>
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://ext.same-assets.com/721295644/4253665504.png"
                alt="Zero Impact"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ZERO IMPACT: NEKONEČNÁ ČERSTVOST, ŽÁDNÉ PLÝTVÁNÍ</h3>
                <p className="text-gray-600 mb-4">
                  Naše inovace pro udržitelnější kávu s větším respektem k životnímu prostředí.
                </p>
                <a href="#" className="text-[#e42842] hover:underline inline-flex items-center gap-2">
                  Číst více <span>›</span>
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://ext.same-assets.com/721295644/1060917610.webp"
                alt="Casa del Caffè"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">LA CASA DEL CAFFÈ MUSETTI</h3>
                <p className="text-gray-600 mb-4">
                  Místo, kde se vášeň pro kávu potkává se zkušeností a srdečným přijetím.
                </p>
                <a href="#" className="text-[#e42842] hover:underline inline-flex items-center gap-2">
                  Číst více <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Zůstaňte v obraze</h2>
          <p className="text-gray-600 mb-8">
            Přihlaste se k newsletteru a dostávejte nejnovější zprávy ze světa Caffè Musetti
          </p>

          <div className="max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Váš e-mail"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#e42842]"
            />

            <button className="bg-[#e42842] text-white px-12 py-3 rounded-full hover:bg-[#c41f35] transition-colors font-semibold">
              Přihlásit se
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

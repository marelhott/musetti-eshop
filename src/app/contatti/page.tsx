export default function Contatti() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#c990a5] via-[#b87a95] to-[#a86585] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Jsme tu pro vás. Napište nám, pokud potřebujete jakékoliv informace.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Napište nám</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Jméno *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-mail *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Zpráva *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <label className="text-sm text-gray-600">
                    Souhlasím se zpracováním osobních údajů podle zásad ochrany soukromí *
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#e42842] text-white px-12 py-3 rounded-full hover:bg-[#c41f35] transition-colors font-semibold"
                >
                  Odeslat zprávu
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Kde nás najdete</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sídlo</h3>
                  <p className="text-gray-700">
                    Musetti S.P.A.<br />
                    Via G.Marcora 2/4<br />
                    29010 Pontenure (PC)<br />
                    Italia
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefono</h3>
                  <p className="text-gray-700">
                    <a href="tel:+390523511811" className="hover:text-[#e42842]">
                      +39 0523 511811
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@musetti.it" className="hover:text-[#e42842]">
                      info@musetti.it
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Otevírací doba</h3>
                  <p className="text-gray-700">
                    Pondělí – pátek: 8:00 – 18:00<br />
                    Sobota – neděle: zavřeno
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Sledujte nás</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-[#e42842] rounded-full flex items-center justify-center text-white hover:bg-[#c41f35] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#e42842] rounded-full flex items-center justify-center text-white hover:bg-[#c41f35] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="white" strokeWidth="2"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"></line>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#e42842] rounded-full flex items-center justify-center text-white hover:bg-[#c41f35] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="bg-gray-100 h-96">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
          <p>Mapa Google Maps (k doplnění)</p>
        </div>
      </section>
    </>
  );
}

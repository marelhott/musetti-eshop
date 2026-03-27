'use client';

function buildMailtoUrl(formData: FormData, email: string) {
  const name = String(formData.get('name') ?? '').trim();
  const senderEmail = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const subject = `Poptávka z MusettiShop.cz${name ? ` - ${name}` : ''}`;
  const body = [
    name ? `Jméno: ${name}` : '',
    senderEmail ? `E-mail: ${senderEmail}` : '',
    phone ? `Telefon: ${phone}` : '',
    '',
    'Zpráva:',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contatti() {
  const contactEmail = 'info@musettishop.cz';
  const primaryPhone = '+420 608 902 070';
  const secondaryPhone = '+420 777 033 307';

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
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  window.location.href = buildMailtoUrl(formData, contactEmail);
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    Jméno *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e42842]"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input id="contact-consent" name="consent" type="checkbox" required className="mt-1" />
                  <label htmlFor="contact-consent" className="text-sm text-gray-600">
                    Souhlasím se zpracováním osobních údajů podle zásad ochrany soukromí *
                  </label>
                </div>

                <p className="text-sm text-gray-600">
                  Formulář otevře váš e-mailový klient a připraví zprávu na adresu{' '}
                  <a href={`mailto:${contactEmail}`} className="font-medium text-[#c92b38] hover:underline">
                    {contactEmail}
                  </a>
                  .
                </p>

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
                  <h3 className="font-semibold text-lg mb-2">Kontaktní centrum</h3>
                  <p className="text-gray-700">
                    MusettiShop.cz<br />
                    Česká klientská a obchodní podpora<br />
                    Péče o retail, HoReCa i B2B poptávky
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                  <p className="text-gray-700">
                    <a href="tel:+420608902070" className="hover:text-[#e42842]">
                      {primaryPhone}
                    </a>
                    <br />
                    <a href="tel:+420777033307" className="hover:text-[#e42842]">
                      {secondaryPhone}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a href={`mailto:${contactEmail}`} className="hover:text-[#e42842]">
                      {contactEmail}
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
                  <h3 className="font-semibold text-lg mb-2">B2B a HoReCa</h3>
                  <p className="text-gray-700 leading-7">
                    Pro poptávky restaurací, kanceláří a provozoven nám napište na{' '}
                    <a href={`mailto:${contactEmail}`} className="hover:text-[#e42842]">
                      {contactEmail}
                    </a>{' '}
                    nebo zavolejte na{' '}
                    <a href="tel:+420608902070" className="hover:text-[#e42842]">
                      {primaryPhone}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="h-96 w-full overflow-hidden">
          <iframe
            title="Kontaktní mapa MusettiShop.cz"
            src="https://www.google.com/maps?q=Praha%2C%20%C4%8Cesko&z=11&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

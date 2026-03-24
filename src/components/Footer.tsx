import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#e42842] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://ext.same-assets.com/721295644/1917089157.png"
              alt="Musetti Logo"
              className="h-12 mb-4 brightness-0 invert"
            />
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="white" strokeWidth="2"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"></line>
                </svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Musetti S.P.A.</p>
            <p>Via G.Marcora 2/4</p>
            <p>29010 Pontenure (PC)</p>
          </div>

          <div>
            <Link href="/contatti" className="block hover:underline mb-2">Spolupráce a poptávky</Link>
            <Link href="/contatti" className="block hover:underline mb-2">Staňte se naším partnerem a napište nám</Link>
            <Link href="/privacy" className="block hover:underline">Ochrana soukromí a cookies</Link>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-sm text-center">
          <a href="#" className="hover:underline">BRAINFARM</a>
        </div>
      </div>
    </footer>
  );
}

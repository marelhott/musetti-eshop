'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [misceleSubMenuOpen, setMisceleSubMenuOpen] = useState(false);

  return (
    <>
      {/* Top Red Bar */}
      <div className="bg-[#e42842] text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex items-center gap-2">
          <span>Zvolte Musetti pro</span>
          <Link href="/" className="font-semibold">DOMOV</Link>
          <span>|</span>
          <span className="font-light">PROFESIONÁLNÍ PROVOZ</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://ext.same-assets.com/721295644/1917089157.png"
              alt="Musetti Logo"
              className="h-12"
            />
          </Link>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-[#e42842]"></div>
              <div className="w-6 h-0.5 bg-[#e42842]"></div>
              <div className="w-6 h-0.5 bg-[#e42842]"></div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/chi-siamo" className="hover:text-[#e42842] transition-colors">O NÁS</Link>
            <Link href="/storia" className="hover:text-[#e42842] transition-colors">PŘÍBĚH ZNAČKY</Link>
            <Link href="/qualita" className="hover:text-[#e42842] transition-colors">KVALITA</Link>

            <div className="relative group">
              <button className="hover:text-[#e42842] transition-colors">SMĚSI</button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/#zrnkova-kava" className="block px-4 py-2 hover:bg-gray-100">Zrnková káva</Link>
                <Link href="/#kapsle-nespresso" className="block px-4 py-2 hover:bg-gray-100">Kapsle Nespresso</Link>
                <Link href="/#pody" className="block px-4 py-2 hover:bg-gray-100">Pody</Link>
                <Link href="/#mleta-kava" className="block px-4 py-2 hover:bg-gray-100">Mletá káva</Link>
              </div>
            </div>

            <Link href="/sostenibilita" className="hover:text-[#e42842] transition-colors">UDRŽITELNOST</Link>
            <Link href="/blog" className="hover:text-[#e42842] transition-colors">BLOG</Link>
            <Link href="/contatti" className="hover:text-[#e42842] transition-colors">KONTAKT</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/chi-siamo" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>O NÁS</Link>
              <Link href="/storia" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>PŘÍBĚH ZNAČKY</Link>
              <Link href="/qualita" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>KVALITA</Link>

              <div>
                <button
                  onClick={() => setMisceleSubMenuOpen(!misceleSubMenuOpen)}
                  className="hover:text-[#e42842] w-full text-left"
                >
                  SMĚSI
                </button>
                {misceleSubMenuOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/#zrnkova-kava" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>Zrnková káva</Link>
                    <Link href="/#kapsle-nespresso" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>Kapsle Nespresso</Link>
                    <Link href="/#pody" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>Pody</Link>
                    <Link href="/#mleta-kava" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>Mletá káva</Link>
                  </div>
                )}
              </div>

              <Link href="/sostenibilita" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>UDRŽITELNOST</Link>
              <Link href="/blog" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
              <Link href="/contatti" className="hover:text-[#e42842]" onClick={() => setMobileMenuOpen(false)}>KONTAKT</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

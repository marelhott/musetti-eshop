import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caffè Musetti CZ Storefront",
  description:
    "Nová podoba českého storefrontu Caffè Musetti: zrnková káva, kapsle Nespresso, pody a mletá káva v přehledném systému.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head />
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Header />
          {children}
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}

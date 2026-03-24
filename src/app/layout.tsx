import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caffè Musetti - A CASA TUA, COME AL BAR",
  description: "Nová podoba, ještě více chuti. Objevte směsi Musetti: Armonico, Intenso, Gentile a Deca.",
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

import type { Metadata } from "next";
import { Source_Serif_4, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const titulo = Source_Serif_4({ subsets: ["latin"], variable: "--font-titulo" });
const texto = Public_Sans({ subsets: ["latin"], variable: "--font-texto" });

export const metadata: Metadata = {
  title: "Artigo 1º — Legislação brasileira, aberta e gratuita",
  description: "Busque leis, decretos, portarias e outras normas. Sem cadastro para ler.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
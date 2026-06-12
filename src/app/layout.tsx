import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vidrios Mundial | Soluciones Premium en Vidrio y Aluminio",
  description:
    "Expertos en vidrios templados, laminados, blindados, sistemas de aluminio, puertas y ventanas. Representantes oficiales de Metalglás Bonomi en Venezuela.",
  keywords: [
    "vidrios templados",
    "vidrios laminados",
    "vidrios blindados",
    "aluminio arquitectónico",
    "puertas de vidrio",
    "ventanas de aluminio",
    "Venezuela",
    "Metalglás Bonomi",
  ],
  openGraph: {
    title: "Vidrios Mundial | Soluciones Premium en Vidrio y Aluminio",
    description:
      "Expertos en vidrios templados, laminados, blindados, sistemas de aluminio, puertas y ventanas.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-white text-[#111111] antialiased">{children}</body>
    </html>
  );
}

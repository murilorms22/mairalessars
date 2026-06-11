import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import ViewportScaler from "@/components/ViewportScaler";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const materialSymbols = localFont({
  src: "../public/fonts/material-symbols-outlined.woff2",
  variable: "--font-material-symbols",
  display: "block",
  weight: "100 700",
  style: "normal",
});


export const metadata: Metadata = {
  title: "Maíra Lessa — A força de uma história que virou propósito",
  description:
    "Maíra Lessa é jornalista, comunicadora, mãe e uma voz que nasceu da escuta, da coragem e do compromisso com as pessoas do Rio Grande do Sul.",
  keywords: [
    "Maíra Lessa",
    "jornalista",
    "comunicadora",
    "Rio Grande do Sul",
    "Sul Gaúcho",
    "propósito",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} ${materialSymbols.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <ViewportScaler />
        {children}
      </body>
    </html>
  );
}

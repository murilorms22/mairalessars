import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        <div id="landscape-blocker" className="hidden fixed inset-0 z-[9999] bg-[#050505] flex-col items-center justify-center text-center p-8 text-white">
          <span className="material-symbols-outlined text-[64px] mb-6 animate-pulse text-primary-container">
            screen_rotation
          </span>
          <h2 className="text-2xl font-bold mb-4 font-[var(--font-montserrat)]">
            Vire seu celular
          </h2>
          <p className="text-surface-variant font-[var(--font-inter)] text-lg">
            Para a melhor experiência, por favor use o site na vertical (modo retrato).
          </p>
        </div>
        <ViewportScaler />
        <div id="main-content" className="flex flex-col min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

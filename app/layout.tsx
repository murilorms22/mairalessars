import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
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
    "candidata",
    "eleições",
    "deputada federal"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "13lqYrRoW6uemlO7g0QF5zWqA8DwlwmnsXQpuf2DJyo",
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9V9JDL8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9V9JDL8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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

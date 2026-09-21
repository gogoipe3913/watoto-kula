// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MouseStalker from "@/components/MouseStalker";
import AdobeFontsLoader from "@/components/AdobeFontsLoader";
import RevealBoot from "@/components/RevealBoot";
import StructuredData from "@/components/StructuredData";

import "lenis/dist/lenis.css";
import "../styles/reveal.scss";
import "./globals.css";
import "@/styles/globals.scss";
import LenisProvider from "./lenis-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "watoto わとと";
const SITE_URL = "https://watoto-kula.com";
const SITE_DESCRIPTION =
  "京都・下鴨本通沿いの「watoto（わとと）」は、人と人とのつながりを大切にする飲食店。お酒とコーヒー、薬膳・発酵食、音楽イベントや習字教室など、多様な過ごし方に寄り添います。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "watoto",
    "わとと",
    "watoto 京都",
    "わとと 京都",
    "京都",
    "下鴨",
    "カフェ",
    "バー",
    "薬膳",
    "発酵食品",
    "イベント",
  ],

  // 著者・制作者・発行主体
  authors: [{ name: "taiki kishiyama" }],
  creator: "taiki kishiyama",
  publisher: SITE_NAME,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "ja_JP",
    images: [
      {
        url: "/og/og-watoto.jpg",
        width: 1200,
        height: 630,
        alt: "watoto わとと（京都・下鴨）",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og/og-watoto.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" data-custom-cursor="on">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LenisProvider>
          <AdobeFontsLoader />
          <RevealBoot />
          {children}
          <MouseStalker />
        </LenisProvider>
      </body>
    </html>
  );
}

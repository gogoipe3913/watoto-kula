// app/taste/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://watoto-kula.com"),

  title: {
    default: "わとと | 京都",
    template: "%s | わとと（京都・下鴨）",
  },
  description:
    "京都・下鴨本通沿いの「わとと（watoto）」は、人と人とのつながりを大切にする飲食店。お酒とコーヒー、薬膳・発酵食、音楽イベントや習字教室など、多様な過ごし方に寄り添います。",
  keywords: [
    "わとと",
    "watoto",
    "京都",
    "下鴨",
    "カフェ",
    "バー",
    "薬膳",
    "発酵食品",
    "イベント",
  ],

  authors: [{ name: "taiki kishiyama" }],
  creator: "taiki kishiyama",
  publisher: "watoto",

  alternates: {
    canonical: "/taste",
  },

  openGraph: {
    type: "website",
    url: "/taste",
    title: "わとと | 京都・下鴨の飲食店",
    description:
      "お酒とコーヒー、こだわりの薬膳・発酵食。イベントも開かれる京都・下鴨の「わとと」。",
    siteName: "わとと",
    locale: "ja_JP",
    images: [
      {
        url: "/og/watoto-og.jpg",
        width: 1200,
        height: 630,
        alt: "わとと（watoto）店内イメージ",
      },
    ],
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

export default function TasteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

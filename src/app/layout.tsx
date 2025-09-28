import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/globals.scss";
import MouseStalker from "@/components/MouseStalker";
import AdobeFontsLoader from "@/components/AdobeFontsLoader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Watoto",
  description: "京都・下鴨のバー、福井・小浜の宿についてのウェブページです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-custom-cursor="on"
      // ★ これで dev/prod どちらでも css より強く上書きできます
      style={{ overflowY: "visible", overflowX: "hidden" }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AdobeFontsLoader />
        {children}
        <MouseStalker />
      </body>
    </html>
  );
}

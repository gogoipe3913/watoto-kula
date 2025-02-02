import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Watoto | Bar",
  description:
    "京都下鴨本通沿いに位置する「watoto」は、訪れる人々に焦点を当てた飲食店です。私たちは、人と人とのつながり、そこで生まれる時間を大切にしています。watotoではお酒とコーヒー、体をいたわる薬膳食や発酵食品を提供していますが、ある時には音楽のイベントが開かれ、またある時には習字教室が開かれたり、その活動は一つの言葉では表せません。既定の形にとらわれず、水のように柔軟に形を変え、さまざまな人々の過ごし方に寄り添っていきたいと考えています。",
};

export default function BarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

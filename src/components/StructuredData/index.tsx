import React from "react";

const SITE_URL = "https://watoto-kula.com";
const SITE_NAME = "watoto わとと";
const DESCRIPTION =
  "京都・下鴨本通沿いの「watoto（わとと）」は、人と人とのつながりを大切にする飲食店。お酒とコーヒー、薬膳・発酵食、音楽イベントや習字教室など、多様な過ごし方に寄り添います。";
const INSTAGRAM_URL = "https://www.instagram.com/watoto_kyoto/";
const MAP_URL = "https://maps.app.goo.gl/sde3RBHFvrs4LfdX8";

/**
 * 検索結果でのサイト名・店舗情報の表示を Google に正しく伝えるための構造化データ。
 * WebSite の name が検索結果のサイト名として使われる。
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: ["watoto", "わとと", "watoto kyoto", "わとと 京都"],
      description: DESCRIPTION,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#restaurant` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: "ja",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#restaurant` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/og/og-watoto.jpg`,
      contentUrl: `${SITE_URL}/og/og-watoto.jpg`,
      width: 1200,
      height: 630,
      caption: SITE_NAME,
    },
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      name: SITE_NAME,
      alternateName: ["watoto", "わとと"],
      description: DESCRIPTION,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/og/og-watoto.jpg`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons/apple-touch-icon.png`,
        width: 180,
        height: 180,
      },
      telephone: "+81-80-2957-4909",
      email: "watoto.kyoto@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "下鴨森本町9",
        addressLocality: "京都市左京区",
        addressRegion: "京都府",
        postalCode: "606-0805",
        addressCountry: "JP",
      },
      hasMap: MAP_URL,
      sameAs: [INSTAGRAM_URL, MAP_URL],
      servesCuisine: ["薬膳料理", "発酵食", "コーヒー", "カクテル"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "11:00",
          closes: "23:00",
        },
      ],
      areaServed: "京都市",
    },
  ],
};

const StructuredData: React.FC = () => (
  <script
    type="application/ld+json"
    // 静的な定数のみをシリアライズしているため安全
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);

export default StructuredData;

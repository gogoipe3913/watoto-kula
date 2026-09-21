/**
 * Adobe Fonts(Typekit) のローダー。
 *
 * 必ず <head> 内で描画すること。
 * クライアント側の useEffect で挿入するとハイドレーション完了まで
 * リクエストが始まらず（実測で FCP より後）、フォント表示が大幅に遅れる。
 * ここでは初期 HTML に直接埋め込み、プリロードスキャナに拾わせる。
 */
const KIT_ID = "dxp1cls";
const KIT_SRC = `https://use.typekit.net/${KIT_ID}.js`;

const INLINE_LOADER = `(function(d){var s=d.createElement("script");s.src="${KIT_SRC}";s.async=true;s.onload=function(){try{window.Typekit.load({async:true})}catch(e){}};d.head.appendChild(s)})(document);`;

export default function AdobeFontsLoader() {
  return (
    <>
      {/* kit.js と、そこから飛ぶフォント本体は同一オリジン */}
      <link rel="preconnect" href="https://use.typekit.net" />
      <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
      {/* HTML パース時点でダウンロードを開始させる */}
      <link rel="preload" as="script" href={KIT_SRC} />
      <script dangerouslySetInnerHTML={{ __html: INLINE_LOADER }} />
    </>
  );
}

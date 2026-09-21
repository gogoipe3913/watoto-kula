"use client";

/**
 * モバイルブラウザのアドレスバー／メニューバーの出し入れ対策。
 *
 * SP ではスクロール方向によってバーが出たり隠れたりし、そのたびに
 * `window.innerHeight` と CSS の `100dvh` が変動する。これを元にレイアウトや
 * スクロール演出を計算していると、上スクロール時と下スクロール時で画面が
 * ガクッと変わってしまう。
 *
 * 対策として
 *  - CSS: `100dvh` ではなく `100svh`（= バーが出ている状態の高さ／常に一定）を使う
 *  - JS : このモジュールが返す「svh の実測値」を使う
 * とし、両者を常に一致させる。
 */

let cachedHeight = 0;
let cachedWidth = -1;

const isCoarsePointer = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(pointer: coarse)").matches;

/** `100svh` を実測する（未対応ブラウザは innerHeight にフォールバック） */
const measureSvh = (): number => {
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:absolute;top:0;left:0;width:0;height:100svh;" +
    "visibility:hidden;pointer-events:none;";
  document.documentElement.appendChild(probe);
  const height = probe.getBoundingClientRect().height;
  probe.remove();
  return height > 0 ? height : window.innerHeight;
};

/** 測り直しを強制する（本当のリサイズ時に呼ぶ） */
export const invalidateViewportHeight = () => {
  cachedWidth = -1;
  cachedHeight = 0;
};

/**
 * バーの開閉では変化しない、安定したビューポート高さ(px)。
 * 毎フレーム呼んでも良いようにキャッシュしてある。
 */
export const getStableViewportHeight = (): number => {
  if (typeof window === "undefined") return 0;
  if (cachedHeight === 0 || cachedWidth !== window.innerWidth) {
    cachedWidth = window.innerWidth;
    cachedHeight = measureSvh();
  }
  return cachedHeight;
};

/**
 * リサイズ購読。タッチ端末では「幅が変わらない高さだけの変化」＝
 * アドレスバーの開閉（やソフトキーボード）とみなして無視する。
 */
export const onStableResize = (callback: () => void): (() => void) => {
  let lastWidth = window.innerWidth;

  const handler = () => {
    const width = window.innerWidth;
    const widthUnchanged = width === lastWidth;
    lastWidth = width;

    // SP のバー開閉は幅が変わらない → レイアウト再計算しない
    if (widthUnchanged && isCoarsePointer()) return;

    invalidateViewportHeight();
    callback();
  };

  const onOrientationChange = () => {
    invalidateViewportHeight();
    lastWidth = window.innerWidth;
    callback();
  };

  window.addEventListener("resize", handler);
  window.addEventListener("orientationchange", onOrientationChange);

  return () => {
    window.removeEventListener("resize", handler);
    window.removeEventListener("orientationchange", onOrientationChange);
  };
};

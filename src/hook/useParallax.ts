"use client";
import { RefObject, useEffect } from "react";
import { useLenis } from "@/app/lenis-provider";
import { getStableViewportHeight, onStableResize } from "@/utils/viewport";

type Opts = {
  root?: HTMLElement | null | RefObject<HTMLElement | null>;
  selector?: string; // .js-parallax
  getSpeed?: (el: HTMLElement) => number; // data-speed
  maxTranslate?: number; // 画面外での振れ幅を安全に制限(px)
};

// 毎レンダーで identity が変わって effect が張り直されないよう、既定値はモジュール定数に置く
const DEFAULT_SELECTOR = ".js-parallax";
const DEFAULT_GET_SPEED = (el: HTMLElement) => Number(el.dataset.speed ?? 0.3);
const DEFAULT_MAX_TRANSLATE = 400;

const resolveRoot = (root: Opts["root"]): ParentNode => {
  if (!root) return document;
  return ("current" in root ? root.current : root) ?? document;
};

export function useParallax({
  root,
  selector = DEFAULT_SELECTOR,
  getSpeed = DEFAULT_GET_SPEED,
  maxTranslate = DEFAULT_MAX_TRANSLATE,
}: Opts) {
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const targets = Array.from(
      resolveRoot(root).querySelectorAll<HTMLElement>(selector)
    );

    if (!targets.length) return;

    // 今この要素に当てている translateY。
    // getBoundingClientRect() は transform 適用後の位置を返すため、
    // これを差し引かないと「自分が動かした分」を入力にしてしまい、
    // 値が毎フレーム収束し続ける（＝スクロールを止めた後もずるずる動く）。
    const applied = new Map<HTMLElement, number>();

    // 画面内のみ更新したいので監視
    const active = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) active.add(e.target as HTMLElement);
          else active.delete(e.target as HTMLElement);
        }
        update();
      },
      { root: null, rootMargin: "20% 0px 20% 0px", threshold: 0 }
    );
    targets.forEach((el) => {
      el.style.willChange = "transform";
      el.style.backfaceVisibility = "hidden";
      // transform は毎フレーム JS が書き換えるので、
      // リビール等のトランジションを乗せない（= スクロール追従が遅れない）
      el.style.transitionProperty = "opacity";
      el.style.transform = "translate3d(0,0,0)";
      applied.set(el, 0);
      io.observe(el);
    });

    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // SP のアドレスバー開閉で値がブレない高さを使う
      const vh = getStableViewportHeight();
      const viewportCenterY = scrollY + vh / 2;

      active.forEach((el) => {
        const current = applied.get(el) ?? 0;
        const rect = el.getBoundingClientRect();

        // transform を当てていない素の中心位置（ドキュメント座標）
        const elementCenterY =
          rect.top + scrollY - current + rect.height / 2;
        const distanceFromViewportCenter = elementCenterY - viewportCenterY;

        const speed = getSpeed(el); // 例: 0.2, 0.6, -0.1 など
        let translateY = -distanceFromViewportCenter * speed;

        // 安全のため上限
        if (translateY > maxTranslate) translateY = maxTranslate;
        if (translateY < -maxTranslate) translateY = -maxTranslate;

        if (Math.abs(translateY - current) < 0.01) return;

        applied.set(el, translateY);
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    // Lenis が位置を更新した直後（同一フレーム）に反映する。
    // これをやらないと smooth scroll と 1 フレームずれて滑り込むように見える。
    lenis?.on("scroll", update);
    // ネイティブスクロール（SP のタッチ操作・アンカージャンプ等）も拾う
    window.addEventListener("scroll", onScroll, { passive: true });
    const offResize = onStableResize(onScroll);

    // 初期1回
    requestAnimationFrame(update);

    return () => {
      lenis?.off("scroll", update);
      window.removeEventListener("scroll", onScroll);
      offResize();
      io.disconnect();
      targets.forEach((el) => {
        el.style.willChange = "";
        el.style.backfaceVisibility = "";
        el.style.transitionProperty = "";
        el.style.transform = "";
      });
    };
  }, [root, selector, getSpeed, maxTranslate, lenis]);
}

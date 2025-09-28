"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./style.module.scss";
import classNames from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const AUTOPLAY_MS = 6500;

const TasteTop: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isTouch, setIsTouch] = useState(false);

  // セクション（200vh）とヒーロー本体（100vh）
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  // タッチ環境はスワイプ許可
  useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mql.matches);
    update();
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } else {
      // Safari 旧 API
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mql as any).addListener?.(update);
      return () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mql as any).removeListener?.(update);
      };
    }
  }, []);

  const slides = [
    { src: "/taste/top-slides/bar/2.JPG", alt: "トップ画像 バーの画像" },
    { src: "/taste/top-slides/coffee/1.JPG", alt: "トップ画像 コーヒーの画像" },
    { src: "/taste/top-slides/vegetables/3.JPG", alt: "トップ画像 野菜の画像" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true as const,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_MS,
    draggable: isTouch,
    swipe: isTouch,
    touchMove: isTouch,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  // 初回のズーム開始
  useEffect(() => {
    const t = setTimeout(() => setActiveIndex(0), 300);
    return () => clearTimeout(t);
  }, []);

  // ★ “擬似 sticky” + 円の半径を JS で更新
  useEffect(() => {
    const section = sectionRef.current;
    const hero = stickyRef.current;
    if (!section || !hero) return;

    // 初期化
    hero.style.setProperty("--r-js", "0px");

    let start = 0;
    let end = 0; // start + 100vh
    let ticking = false;

    const recalc = () => {
      // セクション開始位置
      // offsetTop よりも getBoundingClientRect + scrollY の方が信頼性高い
      const rect = section.getBoundingClientRect();
      start =
        rect.top + (window.scrollY || document.documentElement.scrollTop || 0);
      end = start + window.innerHeight; // 100vh 分で演出
    };

    const computeRadius = () =>
      Math.hypot(window.innerWidth, window.innerHeight) / 2;

    const applyStickyEmulation = (y: number) => {
      // 区間: [start, end)
      if (y < start) {
        // スクロール前：通常フローの先頭にいる状態
        hero.style.position = "relative";
        hero.style.top = "0";
        hero.style.left = "0";
        hero.style.right = "0";
      } else if (y >= start && y < end) {
        // 区間中：画面上部に貼り付け（fixed）
        hero.style.position = "fixed";
        hero.style.top = "0";
        hero.style.left = "0";
        hero.style.right = "0";
        // } else {
        //   // 区間後：セクションの下端に“張り付いた”状態を absolute で再現
        //   hero.style.position = "absolute";
        //   hero.style.top = `${window.innerHeight}px`; // 親(.TasteTop)基準で 100vh の位置
        //   hero.style.left = "0";
        //   hero.style.right = "0";
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop || 0;

        // 擬似 sticky の適用
        applyStickyEmulation(y);

        // 円の半径（0..1）→ 0..対角/2
        const progress = Math.min(Math.max((y - start) / (end - start), 0), 1);
        const r = computeRadius() * progress;
        hero.style.setProperty("--r-js", `${r}px`);

        ticking = false;
      });
    };

    const onResize = () => {
      recalc();
      onScroll();
    };

    recalc();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    // 200vh：前半100vhが演出、後半で離脱
    <section ref={sectionRef} className={styles.TasteTop}>
      {/* 擬似 sticky 対象 */}
      <div ref={stickyRef} className={styles.TasteTop__sticky}>
        {/* 背景スライダー（背面） */}
        <Slider {...settings} className={styles.TasteTop__slider}>
          {slides.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1920}
              height={1080}
              sizes="100vw"
              priority={i === 0}
              className={classNames(
                styles.TasteTop__image,
                activeIndex === i && styles["TasteTop__image--active"]
              )}
            />
          ))}
        </Slider>

        {/* 中央から拡大する円（#E4DFD9） */}
        <div className={styles.TasteTop__reveal} aria-hidden />

        {/* ロゴ・テキスト */}
        <Image
          src="/logo/watoto-taste-logo.svg"
          alt="わとと京都 ロゴ"
          width={68}
          height={175}
          className={styles.TasteTop__logo}
          priority
        />

        <div className={styles.TasteTop__text}>
          <p className={styles.TasteTop__textEn}>
            Savor cocktails in a sanctuary for all,
            <br />
            nestled in the heart of Shimogamo, Kyoto
            <br className={styles.TasteTop__spBr} />
            —where time flows gently,
            <br className={styles.TasteTop__pcBr} />
            and stories intertwine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TasteTop;

"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./style.module.scss";
import classNames from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const AUTOPLAY_MS = 6500; // 必要なら 5500 に

const TasteTop: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isTouch, setIsTouch] = useState(false);

  // スクロール演出用
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  // CSS Scroll-Linked Animations 対応判定
  const useCssScrollLinked =
    typeof window !== "undefined" &&
    typeof CSS !== "undefined" &&
    CSS.supports?.("animation-timeline: view()");

  // タッチ環境ではスワイプ可、PCは不可
  useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mql.matches);
    update();
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } else {
      // Safari 旧API
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

  // CSS非対応ブラウザ向け：JSで --r を更新（最適化版）
  useEffect(() => {
    if (useCssScrollLinked) return; // CSSで動くならJS不要

    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    let start = 0;
    let end = 0;
    let ticking = false;

    const recalc = () => {
      // このセクションの開始〜 +100vh を演出区間に
      start = section.offsetTop;
      end = start + window.innerHeight;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const progress = Math.min(Math.max((y - start) / (end - start), 0), 1); // 0..1
        const maxR = Math.hypot(window.innerWidth, window.innerHeight); // 画面対角
        sticky.style.setProperty("--r", `${maxR * progress}px`);
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
  }, [useCssScrollLinked]);

  return (
    // 200vh：前半100vhが演出区間（stickyで貼り付け）
    <section ref={sectionRef} className={styles.TasteTop}>
      <div ref={stickyRef} className={styles.TasteTop__sticky}>
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

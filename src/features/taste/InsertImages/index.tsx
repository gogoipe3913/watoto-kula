"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const pageY = (el: Element) => el.getBoundingClientRect().top + window.scrollY;

const TasteInsertImages: React.FC = () => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current!;
    const sticky = stickyRef.current!;
    const track = trackRef.current!;
    if (!wrapper || !sticky || !track) return;

    const measure = () => {
      // 横に動く最大距離(px) = トラック総幅 - 画面幅
      const totalX = Math.max(0, track.scrollWidth - window.innerWidth);
      wrapper.style.setProperty("--scrollLen", `${totalX}px`);
      onScroll();
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const top = pageY(wrapper);
        const total = Math.max(
          0,
          parseFloat(getComputedStyle(wrapper).getPropertyValue("--scrollLen"))
        );
        const y = clamp(window.scrollY - top, 0, total);
        const p = total > 0 ? y / total : 0; // 0→1
        sticky.style.setProperty("--p", String(p));
      });
    };

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    measure();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // 画像比（みんな同じならこれでOK。違うなら各スライドに別値を渡す）
  const slideStyle = { "--ratio": 1184 / 1480 } as CSSVars;

  return (
    <section
      ref={wrapperRef}
      className={styles.TasteInsertImages}
      aria-label="店舗の写真"
    >
      <div ref={stickyRef} className={styles.TasteInsertImages__sticky}>
        <div className={styles.TasteInsertImages__frame}>
          <div ref={trackRef} className={styles.TasteInsertImages__track}>
            <div className={styles.TasteInsertImages__slide} style={slideStyle}>
              <Image
                src="/taste/philosophy/1.jpg"
                alt="わとと京都の店舗写真1"
                fill
                priority
                className={styles.TasteInsertImages__img}
                sizes="100vw"
              />
            </div>
            <div className={styles.TasteInsertImages__slide} style={slideStyle}>
              <Image
                src="/taste/philosophy/2.jpg"
                alt="わとと京都の店舗写真2"
                fill
                className={styles.TasteInsertImages__img}
                sizes="100vw"
              />
            </div>
            <div className={styles.TasteInsertImages__slide} style={slideStyle}>
              <Image
                src="/taste/philosophy/3.jpg"
                alt="わとと京都の店舗写真3"
                fill
                className={styles.TasteInsertImages__img}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasteInsertImages;

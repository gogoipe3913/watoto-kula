"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// dynamicでSlick Sliderをクライアントサイドのみで読み込む
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
  const [barActiveIndex, setBarActiveIndex] = useState(-1);
  const [stayActiveIndex, setStayActiveIndex] = useState(-1);
  const barSettings = {
    dots: false, // ドットナビゲーションを表示
    infinite: true, // 無限スクロール
    arrows: false,
    speed: 1800, // スライドの切り替え速度
    slidesToShow: 1, // 表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    draggable: false,
    swipe: false,
    fade: true,
    pauseOnFocus: false, //フォーカスで一時停止
    pauseOnHover: false, //マウスホバーで一時停止
    autoplay: true, // 自動再生
    autoplaySpeed: 5500, // 自動再生速度
    beforeChange: (_: number, nextIndex: number) =>
      setBarActiveIndex(nextIndex),
  };
  const staySettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    fade: true,
    pauseOnFocus: false, //フォーカスで一時停止
    pauseOnHover: false, //マウスホバーで一時停止
    autoplay: true,
    autoplaySpeed: 5500,
    beforeChange: (_: number, nextIndex: number) =>
      setStayActiveIndex(nextIndex),
  };

  useEffect(() => {
    // 最初のtransitionを発火させる
    setTimeout(() => {
      setBarActiveIndex(0);
      setStayActiveIndex(0);
    }, 500);
  }, []);

  return (
    <div className={styles.Top}>
      <Image
        src="/logo/watoto-hw.svg"
        alt="ロゴ"
        width={220}
        height={77}
        className={styles.Top__logo}
      />
      <Link href="/bar" className={styles.Top__link}>
        <div className={styles.Top__media}>
          <Slider {...barSettings} className={styles.Top__slider}>
            {[1, 2, 3].map((n, i) => (
              <div key={n} className={styles.Top__slide}>
                <Image
                  src={`/top/taste-${n}.webp`}
                  alt={`バーの写真${n}`}
                  fill // ← これが重要
                  priority={i === 0}
                  className={classNames(
                    styles.Top__image,
                    barActiveIndex === i ? styles["Top__image--active"] : ""
                  )}
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className={styles.Top__title}>Taste</p>
        <p className={styles.Top__textBar}>
          京都・下鴨に佇む、
          <br />
          多様な人々のための空間で味わいのひとときを。
        </p>
      </Link>
      <Link href="/stay" className={styles.Top__link}>
        <div className={styles.Top__media}>
          <Slider {...staySettings} className={styles.Top__slider}>
            {[1, 2, 3].map((n, i) => (
              <div key={n} className={styles.Top__slide}>
                <Image
                  src={`/top/stay-${n}.webp`}
                  alt={`宿の写真${n}`}
                  fill // ← これが重要
                  priority={i === 0}
                  className={classNames(
                    styles.Top__image,
                    stayActiveIndex === i ? styles["Top__image--active"] : ""
                  )}
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className={styles.Top__title}>Stay</p>
        <p className={styles.Top__textStay}>
          福井・小浜の自然に囲まれて、
          <br />
          自分だけの風景を探すひとときを。
        </p>
      </Link>
    </div>
  );
}

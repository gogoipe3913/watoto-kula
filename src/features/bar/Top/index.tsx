"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./style.module.scss";
import classNames from "classnames";
import ScrollIndicator from "@/components/ScrollIndicator";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// dynamicでSlick Sliderをクライアントサイドのみで読み込む
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const BarTop: React.FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const settings = {
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
    beforeChange: (_: number, nextIndex: number) => setActiveIndex(nextIndex),
  };

  useEffect(() => {
    // 最初のtransitionを発火させる
    setTimeout(() => {
      setActiveIndex(0);
    }, 500);
  }, []);

  return (
    <div className={styles.BarTop}>
      <Slider {...settings} className={styles.BarTop__slider}>
        <Image
          src="/bar/top-slides/bar/2.JPG"
          alt="トップ画像 バーの画像"
          width={720}
          height={967}
          className={classNames(
            styles.BarTop__image,
            activeIndex == 0 ? styles["BarTop__image--active"] : ""
          )}
        />
        <Image
          src="/bar/top-slides/coffee/1.JPG"
          alt="トップ画像 コーヒーの画像"
          width={720}
          height={967}
          className={classNames(
            styles.BarTop__image,
            activeIndex == 1 ? styles["BarTop__image--active"] : ""
          )}
        />
        <Image
          src="/bar/top-slides/vegetables/3.JPG"
          alt="トップ画像 野菜の画像"
          width={720}
          height={967}
          className={classNames(
            styles.BarTop__image,
            activeIndex == 2 ? styles["BarTop__image--active"] : ""
          )}
        />
      </Slider>
      <div className={styles.BarTop__spVideoWrapper}>
        <video
          playsInline
          muted={true}
          autoPlay={true}
          loop={true}
          src="/bar/video/top.mp4"
          className={styles.BarTop__spVideo}
        />
      </div>
      <div className={styles.BarTop__text}>
        <p className={styles.BarTop__textJp}>
          京都・下鴨に佇む、
          <br />
          多様な人々のための空間でカクテルを。
        </p>
        <p className={styles.BarTop__textEn}>
          Savor cocktails in a sanctuary for all,
          <br />
          nestled in the heart of Shimogamo, Kyoto
          <br className={styles.BarTop__spBr} />
          —where time flows gently,
          <br />
          and stories intertwine.
        </p>
      </div>
      <ScrollIndicator className={styles.BarTop__scrollIndicator} />
    </div>
  );
};

export default BarTop;

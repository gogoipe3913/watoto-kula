"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
import ScrollIndicator from "@/components/ScrollIndicator";
import styles from "./page.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// dynamicでSlick Sliderをクライアントサイドのみで読み込む
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Bar() {
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
    <div className={styles.Bar}>
      <Image
        src="/logo/main.svg"
        alt="ロゴ"
        width={40}
        height={120}
        className={styles.Bar__logo}
      />
      <ul className={styles.Bar__menu}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#concept">Concept</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#access">Access</a>
        </li>
        <li>
          <button className={styles.Bar__hamburger}>
            <span className={styles.Bar__hamburgerLine}></span>
            <span className={styles.Bar__hamburgerLine}></span>
          </button>
        </li>
      </ul>
      <video
        playsInline
        muted={true}
        autoPlay={true}
        loop={true}
        src="/bar/video/top.mp4"
        className={styles.Bar__topVideo}
      />
      <Slider {...settings} className={styles.Bar__slider}>
        <Image
          src="/bar/top-slides/bar/2.JPG"
          alt="トップ画像 バーの画像"
          width={720}
          height={967}
          className={classNames(
            styles.Bar__image,
            activeIndex == 0 ? styles["Bar__image--active"] : ""
          )}
        />
        <Image
          src="/bar/top-slides/coffee/1.JPG"
          alt="トップ画像 コーヒーの画像"
          width={720}
          height={967}
          className={classNames(
            styles.Bar__image,
            activeIndex == 1 ? styles["Bar__image--active"] : ""
          )}
        />
        <Image
          src="/bar/top-slides/vegetables/3.JPG"
          alt="トップ画像 野菜の画像"
          width={720}
          height={967}
          className={classNames(
            styles.Bar__image,
            activeIndex == 2 ? styles["Bar__image--active"] : ""
          )}
        />
      </Slider>
      <p className={styles.Bar__text}>
        京都・下鴨に佇む、
        <br />
        多様な人々のための空間でカクテルを。
      </p>
      <ScrollIndicator className={styles.Bar__scrollIndicator} />
    </div>
  );
}

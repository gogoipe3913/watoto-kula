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
    }, 200);
  }, []);

  return (
    <div className={styles.Top}>
      <Image
        src="/logo/main.svg"
        alt="ロゴ"
        width={40}
        height={120}
        className={styles.Top__logo}
      />
      <Link href="/bar" className={styles.Top__link}>
        <Slider {...barSettings} className={styles.Top__slider}>
          <Image
            src="/top/bar_photo_1.webp"
            alt="バーの写真1"
            width={720}
            height={967}
            className={classNames(
              styles.Top__image,
              barActiveIndex == 0 ? styles["Top__image--active"] : ""
            )}
          />
          <Image
            src="/top/bar_photo_2.webp"
            alt="バーの写真2"
            width={720}
            height={967}
            className={classNames(
              styles.Top__image,
              barActiveIndex == 1 ? styles["Top__image--active"] : ""
            )}
          />
          <Image
            src="/top/bar_photo_3.webp"
            alt="バーの写真3"
            width={720}
            height={967}
            className={classNames(
              styles.Top__image,
              barActiveIndex == 2 ? styles["Top__image--active"] : ""
            )}
          />
        </Slider>
        <p className={styles.Top__title}>Bar</p>
        <p className={styles.Top__textBar}>
          京都・下鴨に佇む、
          <br />
          多様な人々のための空間でカクテルを。
        </p>
      </Link>
      <Link href="/stay" className={styles.Top__link}>
        <Slider {...staySettings} className={styles.Top__slider}>
          <Image
            src="/top/stay_photo_1.webp"
            alt="宿の写真1"
            width={720}
            height={967}
            className={classNames(
              styles.Top__image,
              stayActiveIndex == 0 ? styles["Top__image--active"] : ""
            )}
          />
          <Image
            src="/top/stay_photo_2.webp"
            alt="宿の写真2"
            width={720}
            height={967}
            className={classNames(
              styles.Top__image,
              stayActiveIndex == 1 ? styles["Top__image--active"] : ""
            )}
          />
          <Image
            src="/top/stay_photo_3.webp"
            alt="宿の写真2"
            width={720}
            height={967}
            className={classNames(
              styles.Top__image,
              stayActiveIndex == 2 ? styles["Top__image--active"] : ""
            )}
          />
        </Slider>
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

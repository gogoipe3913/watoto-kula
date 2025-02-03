"use client";

import BarAbout from "@/features/bar/About";
import BarTop from "@/features/bar/Top";
import Header from "@/components/Header";
import styles from "./page.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BarTopSecond from "@/features/bar/TopSecond";
import BarConcepts from "@/features/bar/Concepts";
import { useState } from "react";

export default function Bar() {
  const [isMenuColored, setIsMenuColored] = useState(false);
  return (
    <div className={styles.Bar}>
      <Header isColored={isMenuColored} />
      {/* <video
        playsInline
        muted={true}
        autoPlay={true}
        loop={true}
        src="/bar/video/top.mp4"
        className={styles.Bar__topVideo}
      /> */}

      <BarTop />
      <BarTopSecond />
      <BarAbout onIntersect={setIsMenuColored} />
      <BarConcepts />
    </div>
  );
}

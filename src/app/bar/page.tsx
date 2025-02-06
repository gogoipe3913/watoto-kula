"use client";

import BarAbout from "@/features/bar/About";
import BarTop from "@/features/bar/Top";
import Header from "@/components/Header";
import BarTopSecond from "@/features/bar/TopSecond";
import BarConcepts from "@/features/bar/Concepts";
import { useEffect, useRef, useState } from "react";
import BarGallery from "@/features/bar/Gallery";
import BarAccess from "@/features/bar/Access";
import styles from "./page.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/features/common/Footer";
import AnotherPageLink from "@/features/common/AnotherPageLink";
import MenuModal from "@/components/MenuModal";

export default function Bar() {
  const [isHeaderColored, setIsHeaderColored] = useState(false);
  const [isMenuModalOpened, setIsMenuModalOpened] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderColored(true);
        } else {
          setIsHeaderColored(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -92% 0px", // 画面上部に到達したらトリガー
      }
    );

    observer.observe(targetRef.current);
  }, []);

  return (
    <div className={styles.Bar}>
      <Header
        isColored={isHeaderColored}
        onClick={() => {
          setIsMenuModalOpened(true);
        }}
      />
      <MenuModal
        isOpen={isMenuModalOpened}
        closeModal={() => {
          setIsMenuModalOpened(false);
        }}
      />
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
      <div ref={targetRef} className={styles.Bar__contents}>
        <BarAbout />
        <BarConcepts />
        <BarGallery />
        <BarAccess />
        <AnotherPageLink />
      </div>
      <Footer />
    </div>
  );
}

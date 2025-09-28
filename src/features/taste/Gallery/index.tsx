"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TasteGallery: React.FC = ({}) => {
  return (
    <div className={styles.TasteGallery}>
      <h2>Gallery</h2>
      <ul className={styles.TasteGallery__images}>
        <li>
          <a href="https://www.instagram.com/p/DFjze_xypKR/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/1.jpg"
              alt="コンセプトのバー画像1"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DFbZXqGyMIj" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/2.jpg"
              alt="コンセプトのバー画像2"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DFB7XYdyGWC" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/3.jpg"
              alt="コンセプトのバー画像3"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DEjaS-1y1eg" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/4.jpg"
              alt="コンセプトのバー画像4"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DEPuQrASVaT/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/5.jpg"
              alt="コンセプトのバー画像5"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DDp70RSzExZ/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/6.jpg"
              alt="コンセプトのバー画像6"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DCvf0PfSjTS/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/7.jpg"
              alt="コンセプトのバー画像7"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/DAhbIv8yacy/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/8.jpg"
              alt="コンセプトのバー画像8"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/C_0TxwrS68B/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/9.jpg"
              alt="コンセプトのバー画像9"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/C83p-loyQ0R/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/10.jpg"
              alt="コンセプトのバー画像10"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/C8g-PmDyIf_/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/11.jpg"
              alt="コンセプトのバー画像11"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/p/C7Vzjb0S-bq/" target="_blank">
            <Image
              width={200}
              height={250}
              src="/taste/gallery/12.jpg"
              alt="コンセプトのバー画像12"
            />
          </a>
        </li>
      </ul>
      <a
        target="_blank"
        href="https://www.instagram.com/watoto_kyoto/"
        className={styles.TasteGallery__link}
      >
        <span>View Instagram</span>
        <span className={styles.TasteGallery__linkArrow} />
      </a>
    </div>
  );
};

export default TasteGallery;

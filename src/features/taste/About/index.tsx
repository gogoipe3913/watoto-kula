"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import FadeInContainer from "@/components/FadeInContainer";
import { ScrollParallax } from "react-just-parallax";

const TasteAbout: React.FC = ({}) => {
  return (
    <div id="#TasteAbout" className={styles.TasteAbout}>
      <div className={styles.TasteAbout__body}>
        <div className={styles.TasteAbout__texts}>
          <FadeInContainer>
            <h2 className={styles.TasteAbout__title}>
              <p className={styles.TasteAbout__titleJp}>わととについて</p>
              <p className={styles.TasteAbout__titleEn}>about watoto</p>
            </h2>
          </FadeInContainer>
          <FadeInContainer>
            <div className={styles.TasteAbout__content}>
              <p className={styles.TasteAbout__contentJp}>
                {/* あとでJson化したい */}
                京都下鴨本通沿いに位置する「わとと」は、
                <br />
                訪れる人々に焦点を当てた飲食店です。
                <br />
                <br />
                私たちは、人と人とのつながり、
                <br />
                そこで生まれる時間を大切にしています。
                <br />
                <br />
                わととではお酒とコーヒー、
                <br />
                体をいたわる薬膳食や発酵食品を提供しています。
                <br />
                <br />
                しかし、
                <br />
                ある時には音楽のイベントが開かれ、
                <br />
                またある時には習字教室が開かれたり、
                <br />
                その活動は一つの言葉では表せません。
                <br />
                <br />
                既定の形にとらわれず、
                <br />
                水のように柔軟に形を変え、
                <br />
                さまざまな人々の過ごし方に
                <br />
                寄り添っていきたいと考えています。
              </p>
              <p className={styles.TasteAbout__contentEn}>
                Located along Shimogamo-Hondori in Kyoto,
                <br />
                watoto is an establishment that focuses on
                <br />
                the people who visit us.
                <br />
                <br />
                We cherish human connections and
                <br />
                the moments that arise from them.
                <br />
                <br />
                While watoto serves alcohol, coffee,
                <br />
                nourishing Chinese herbal cuisine,
                <br />
                and fermented food.
                <br />
                <br />
                But our activities cannot be defined by
                <br />a single description -
                <br />
                sometimes we host music events,
                <br />
                other times we hold calligraphy classes.
                <br />
                <br />
                Like water,
                <br />
                we aim to remain flexible and adapt
                <br />
                our form without being bound by
                <br />
                conventional structures,
                <br />
                accommodating the diverse ways in
                <br />
                which people choose to spend their time.
              </p>
            </div>
          </FadeInContainer>
        </div>

        <div className={styles.TasteAbout__parallaxWrapper}>
          <ScrollParallax strength={0.09}>
            <Image
              src="/taste/about/1.JPG"
              alt="About バー店内の写真"
              width={720}
              height={967}
              className={styles.TasteAbout__image}
            />
          </ScrollParallax>
        </div>
      </div>
      {/* 
      <Image
        src="/taste/about/2.JPG"
        alt="About バー店内の写真"
        width={720}
        height={420}
        className={styles.TasteAbout__lowerImage}
      /> */}
    </div>
  );
};

export default TasteAbout;

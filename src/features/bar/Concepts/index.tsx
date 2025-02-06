/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";

const BarConcepts: React.FC = ({}) => {
  const [displayedImageNumber, setDisplayedImageNumber] = useState(1);
  const cocktailRef = useRef<HTMLHeadingElement | null>(null);
  const coffeeRef = useRef<HTMLHeadingElement | null>(null);
  const lunchRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const sections = [
      { ref: cocktailRef, number: 1 },
      { ref: coffeeRef, number: 2 },
      { ref: lunchRef, number: 3 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (target) {
              setDisplayedImageNumber(target.number);
            }
          }
        });
      },
      {
        threshold: 0.5, // 50%以上見えたらトリガー
        rootMargin: "0px 0px -50% 0px", // 画面中央付近で発火
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.BarConcepts}>
      <div className={style.BarConcepts__contents}>
        <div className={style.BarConcepts__contentImageBox}>
          <Image
            width={800}
            height={400}
            src={`/bar/concept/${displayedImageNumber}.JPG`}
            alt="コンセプトのバー画像"
          />
        </div>
        <ul className={style.BarConcepts__contentTexts}>
          <li>
            <h3 ref={cocktailRef} className={style.BarConcepts__contentTitle}>
              Cocktail
            </h3>
            <p className={style.BarConcepts__contentTextBodyJa}>
              わととでは、蒸留器を使い、福井県で育った植物を用いたカクテルを提供しています。
              これらの植物は、「二十四節気七十二候」と呼ばれる、1年を細かく分けた季節の区切りに基づいて選ばれています。
              細やかな季節の移ろいに寄り添う、福井の土地と季節の香りを感じられる特別なカクテルをお楽しみください。
            </p>
            <p className={style.BarConcepts__contentTextBodyEn}>
              At watoto, we serve cocktails made with plants grown in Fukui
              Prefecture using a distillation system. These plants are selected
              based on "Nijūshi Sekki Shichijūni Kō" (Twenty-four Solar Terms
              and Seventy-two Microseasons) - a traditional calendar that
              divides the year into detailed seasonal periods. Please enjoy our
              special cocktails that embrace the subtle changes of seasons and
              capture the essence of Fukui's terroir and seasonal fragrances.
            </p>
          </li>
          <li>
            <h3 ref={coffeeRef} className={style.BarConcepts__contentTitle}>
              Coffee
            </h3>
            <p className={style.BarConcepts__contentTextBodyJa}>
              わととでは、自家焙煎した深煎りを中心とするコーヒーを提供しています。
              コーヒーを飲みながら、瞑想のように心を落ち着ける時間を過ごしても、ただ何も考えないひとときを楽しんでも、日常に溢れる情報から距離を置いても構いません。
              バータイムにもコーヒーをご利用いただけます。自由に自分のペースで過ごす時間をお楽しみください。
            </p>
            <p className={style.BarConcepts__contentTextBodyEn}>
              At watoto, we serve coffee with a focus on our house-roasted dark
              roasts. While enjoying your coffee, you're welcome to spend your
              time as you wish - whether that's calming your mind in
              meditation-like stillness, simply enjoying a moment of
              thoughtlessness, or taking a break from the flood of everyday
              information. Coffee is also available during bar hours. Please
              enjoy spending time at your own pace, in your own way.
            </p>
          </li>
          <li>
            <h3 ref={lunchRef} className={style.BarConcepts__contentTitle}>
              Lunch
            </h3>
            <p className={style.BarConcepts__contentTextBodyJa}>
              わととでは、福井県の季節ごとの食材をメインに、薬膳と発酵食品を取り入れたお料理をご提供しています。
              食材は、二十四節気に基づく旬の植物を中心に選び、自然の力を最大限に活かした一皿をお届けします。
              仏教の御斎の考え方を取り入れつつ、決してかしこまったものではなく、肩の力を抜いて楽しんでいただける、リラックスした雰囲気での食事を目指しています。心と体を優しく整える、ラフに味わえる料理をどうぞ。
            </p>
            <p className={style.BarConcepts__contentTextBodyEn}>
              At watoto, we serve dishes incorporating Chinese herbal cuisine
              and fermented foods, primarily featuring seasonal ingredients from
              Fukui Prefecture. Our ingredients are selected based on the
              Twenty-four Solar Terms, focusing on seasonal plants to create
              dishes that maximize nature's inherent properties. While our
              approach is inspired by Buddhist shōjin cuisine principles, we aim
              to provide a relaxed dining experience without any formality - a
              place where you can truly unwind. Please enjoy our casual yet
              nourishing cuisine that gently harmonizes both mind and body.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarConcepts;

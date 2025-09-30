/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import contents from "@/contents/TasteServices.ja.json";
import HeadingTexts from "@/components/HeadingTexts";
import classNames from "classnames";

const renderWithBr = (text: string) =>
  text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));

const TasteServices: React.FC = ({}) => {
  const {
    heading,
    category,
    lunchHeading,
    lunchBody,
    coffeeBody,
    coffeeHeading,
    cocktailBody,
    cocktailHeading,
  } = contents;
  return (
    <div className={styles.TasteServices}>
      <div className={styles.TasteServices__stickyHeading}>
        <HeadingTexts
          textFirst={heading.first}
          textSecond={heading.second}
          textThird={heading.third}
          className={styles.TasteServices__heading}
        />
        <h2 className={styles.TasteServices__category}>
          {renderWithBr(category)}
        </h2>
      </div>

      <div className={styles.TasteServices__contents}>
        <div className={styles.TasteServices__descriptionBlock}>
          <Image
            src="/taste/services/1.jpg"
            alt="わとと京都 お料理の写真1"
            width={459}
            height={689}
            className={classNames(
              styles.TasteServices__img,
              styles["TasteServices__img--1"]
            )}
          />
          <div className={styles.TasteServices__text}>
            <h3 className={styles.TasteServices__subHeading}>
              {lunchHeading.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </h3>
            <div className={styles.TasteServices__description}>
              {lunchBody.map((paragraph, i) => (
                <p key={i}>{renderWithBr(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/taste/services/2.jpg"
          alt="わとと京都 お料理の写真2"
          width={407}
          height={610}
          className={classNames(
            styles.TasteServices__img,
            styles["TasteServices__img--2"]
          )}
        />
        <Image
          src="/taste/services/3.jpg"
          alt="わとと京都 お料理の写真3"
          width={448}
          height={299}
          className={classNames(
            styles.TasteServices__img,
            styles["TasteServices__img--3"]
          )}
        />
        <div className={styles.TasteServices__descriptionBlock}>
          <div>
            <Image
              src="/taste/services/4.jpg"
              alt="わとと京都 珈琲の写真1"
              width={492}
              height={328}
              className={styles.TasteServices__img}
            />
            <Image
              src="/taste/services/5.jpg"
              alt="わとと京都 珈琲の写真2"
              width={492}
              height={328}
              className={styles.TasteServices__img}
            />
          </div>
          <div className={styles.TasteServices__text}>
            <h3 className={styles.TasteServices__subHeading}>
              {coffeeHeading.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </h3>
            <div className={styles.TasteServices__description}>
              {coffeeBody.map((paragraph, i) => (
                <p key={i}>{renderWithBr(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/taste/services/6.jpg"
          alt="わとと京都 珈琲の写真3"
          width={501}
          height={334}
          className={classNames(
            styles.TasteServices__img,
            styles["TasteServices__img--6"]
          )}
        />
        <Image
          src="/taste/services/7.jpg"
          alt="わとと京都 珈琲の写真4"
          width={448}
          height={299}
          className={classNames(
            styles.TasteServices__img,
            styles["TasteServices__img--7"]
          )}
        />
        <div className={styles.TasteServices__descriptionBlock}>
          <Image
            src="/taste/services/8.jpg"
            alt="わとと京都 お酒の写真1"
            width={460}
            height={689}
            className={styles.TasteServices__img}
          />
          <div className={styles.TasteServices__text}>
            <h3 className={styles.TasteServices__subHeading}>
              {cocktailHeading.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </h3>
            <div className={styles.TasteServices__description}>
              {cocktailBody.map((paragraph, i) => (
                <p key={i}>{renderWithBr(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/taste/services/9.jpg"
          alt="わとと京都 お酒の写真2"
          width={530}
          height={354}
          className={classNames(
            styles.TasteServices__img,
            styles["TasteServices__img--9"]
          )}
        />
        <Image
          src="/taste/services/10.jpg"
          alt="わとと京都 お酒の写真3"
          width={380}
          height={570}
          className={classNames(
            styles.TasteServices__img,
            styles["TasteServices__img--10"]
          )}
        />
      </div>
    </div>
  );
};

export default TasteServices;

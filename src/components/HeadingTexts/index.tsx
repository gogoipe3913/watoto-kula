"use client";
import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type HeadingTextsProps = {
  textFirst: string;
  textSecond?: string;
  textThird?: string;
  className?: string;
};

const splitToSpans = (text: string, className: string) => {
  return text.split("").map((char, i) => (
    <span key={i} className={className}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const HeadingTexts: React.FC<HeadingTextsProps> = ({
  textFirst,
  textSecond = "",
  textThird = "",
  className = "",
}) => {
  const ariaLabel = `${textFirst} ${textSecond} ${textThird}`.trim();

  return (
    <h2
      className={classNames(styles.HeadingTexts, className)}
      aria-label={ariaLabel}
    >
      <span className={styles.HeadingTexts__textFirst} aria-hidden="true">
        {splitToSpans(textFirst, styles.HeadingTexts__letter)}
      </span>
      {textSecond && (
        <span className={styles.HeadingTexts__textSecond} aria-hidden="true">
          {splitToSpans(textSecond, styles.HeadingTexts__letter)}
        </span>
      )}
      {textThird && (
        <span className={styles.HeadingTexts__textThird} aria-hidden="true">
          {splitToSpans(textThird, styles.HeadingTexts__letter)}
        </span>
      )}
    </h2>
  );
};

export default HeadingTexts;

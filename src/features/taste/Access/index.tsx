"use client";

import React from "react";
import HeadingTexts from "@/components/HeadingTexts";
import contents from "@/contents/TasteAccess.ja.json";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const renderWithBr = (text: string) =>
  text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));

const TasteAccess: React.FC = ({}) => {
  const { heading, category } = contents;
  return (
    <div className={styles.TasteAccess}>
      <div className={styles.TasteAccess__heading}>
        <div className={styles.TasteAccess__stickyHeading}>
          <HeadingTexts
            textFirst={heading.first}
            textSecond={heading.second}
            textThird={heading.third}
          />
          <h2 className={styles.TasteAccess__category}>
            {renderWithBr(category)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TasteAccess;

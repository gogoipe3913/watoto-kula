"use client";

import React from "react";
import styles from "./style.module.scss";
import HeadingTexts from "@/components/HeadingTexts";
import contents from "@/contents/TastePhilosophy.ja.json";

const renderWithBr = (text: string) =>
  text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));

const TastePhilosophy: React.FC = () => {
  const { heading, category, body } = contents;

  return (
    <section className={styles.TastePhilosophy}>
      <div className={styles.TastePhilosophy__left}>
        <div className={styles.TastePhilosophy__sticky}>
          <HeadingTexts
            textFirst={heading.first}
            textSecond={heading.second}
            textThird={heading.third}
            className={styles.TastePhilosophy__heading}
          />
          <h2 className={styles.TastePhilosophy__category}>
            {renderWithBr(category)}
          </h2>
        </div>
      </div>

      <div className={styles.TastePhilosophy__right}>
        <div className={styles.TastePhilosophy__bodyWrapper}>
          {body.map((p, i) => (
            <p key={i} className={styles.TastePhilosophy__body}>
              {renderWithBr(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TastePhilosophy;

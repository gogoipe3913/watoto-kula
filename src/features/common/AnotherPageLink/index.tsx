"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";

const AnotherPageLink: React.FC = ({}) => {
  return (
    <div className={styles.AnotherPageLink}>
      <Link href="/stay">
        <Image
          src="/bar/anotherPage/stay-text.svg"
          alt=""
          width={180}
          height={80}
        />
        <span className={styles.AnotherPageLink__button}>
          <span>View Watoto Stay Lita</span>
          <span className={styles.AnotherPageLink__linkArrow} />
        </span>
      </Link>
    </div>
  );
};

export default AnotherPageLink;

"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const TasteTopSecond: React.FC = ({}) => {
  return (
    <Image
      src="/taste/second/3.JPG"
      alt="トップ画像下の画像"
      width={720}
      height={967}
      className={styles.TasteTopSecond}
    />
  );
};

export default TasteTopSecond;

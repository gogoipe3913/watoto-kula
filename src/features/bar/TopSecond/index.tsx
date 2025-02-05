"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const BarTopSecond: React.FC = ({}) => {
  return (
    <Image
      src="/bar/second/3.JPG"
      alt="トップ画像下の画像"
      width={720}
      height={967}
      className={styles.BarTopSecond}
    />
  );
};

export default BarTopSecond;

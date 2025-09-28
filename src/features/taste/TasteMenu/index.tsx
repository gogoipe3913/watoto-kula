"use strict";

import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export default function TasteMenu() {
  return (
    <div className={styles.TasteMenu}>
      <Image
        src="/logo/line-hw.svg"
        alt="メニューアイコン"
        width={340}
        height={655}
        className={styles.TasteMenu__line}
        priority
      />
      <button>
        <Image
          src="/logo/menu-icon-white.svg"
          alt="メニューアイコン"
          width={60}
          height={27}
          className={styles.TasteMenu__icon}
          priority
        />
      </button>
      <ul>
        <li>Philosophy</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Access</li>
      </ul>
    </div>
  );
}

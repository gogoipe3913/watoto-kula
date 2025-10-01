"use strict";

import React from "react";
import Image from "next/image";
import HamburgerIcon from "@/components/HamburgerIcon";
import styles from "./style.module.scss";

export default function TasteMenu() {
  return (
    <div className={styles.TasteMenu}>
      <Image
        src="/logo/line-hw.svg"
        alt="線"
        width={340}
        height={655}
        className={styles.TasteMenu__line}
        priority
      />
      <button>
        <HamburgerIcon className={styles.TasteMenu__icon} />
      </button>
      <ul>
        <li>
          <a href="#philosophy">Philosophy</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#access">Access</a>
        </li>
      </ul>
    </div>
  );
}

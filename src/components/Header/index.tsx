"use client";

import React from "react";
import classNames from "classnames";
import Image from "next/image";
import style from "./style.module.scss";

type HeaderProps = {
  isColored?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  isColored = false,
  className = "",
}) => (
  <div className={classNames(style.Header, className)}>
    <Image
      src="/logo/main.svg"
      alt="ロゴ"
      width={40}
      height={120}
      className={classNames(
        style.Header__logo,
        isColored ? style["Header__logo--colored"] : ""
      )}
    />
    <ul
      className={classNames(
        style.Header__menu,
        isColored ? style["Header__menu--colored"] : ""
      )}
    >
      <li>
        <a href="#BarAbout">About</a>
      </li>
      <li>
        <a href="#concept">Concept</a>
      </li>
      <li>
        <a href="#gallery">Gallery</a>
      </li>
      <li>
        <a href="#access">Access</a>
      </li>
      <li>
        <button className={style.Header__hamburger}>
          <span className={style.Header__hamburgerLine}></span>
          <span className={style.Header__hamburgerLine}></span>
        </button>
      </li>
    </ul>
  </div>
);

export default Header;

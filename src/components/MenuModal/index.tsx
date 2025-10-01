"use client";

import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import style from "./style.module.scss";
import Logo from "../logo";

type MenuModalProps = {
  isOpen?: boolean;
  className?: string;
  closeModal?(): void;
};

const MenuModal: React.FC<MenuModalProps> = ({
  isOpen = false,
  className = "",
  closeModal = () => {},
}) => {
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <CSSTransition
      in={isOpen && mounted}
      timeout={200}
      classNames={style.MenuModalTransition}
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={classNames(style.MenuModal, className)}>
        <Logo isColored={true} className={style.MenuModal__logo} />
        <button onClick={closeModal} className={style.MenuModal__button}>
          <span></span>
          <span></span>
        </button>
        <div className={style.MenuModal__info}>
          <div className={style.MenuModal__sections}>
            <div className={style.MenuModal__section}>
              <p>Taste</p>
              <ul>
                <li>
                  <a href="#TasteAbout">About</a>
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
              </ul>
            </div>
            <div className={style.MenuModal__section}>
              <p>Stay</p>
              <ul>
                <li className={style.MenuModal__underConstruction}>
                  現在準備中
                </li>
              </ul>
            </div>
          </div>
          <div className={style.MenuModal__commonSection}>
            <p>
              <a href="mailto:watoto.kyoto@gmail.com">contact</a>
            </p>
            <p>
              <a target="_blank" href="https://www.instagram.com/watoto_kyoto/">
                instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MenuModal;

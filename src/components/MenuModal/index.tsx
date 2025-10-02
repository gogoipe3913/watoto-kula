// MenuModal.tsx
"use client";

import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import styles from "./style.module.scss";

type MenuModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

const MenuModal: React.FC<MenuModalProps> = ({
  className = "",
  isOpen,
  onClose,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // ★ 2段階 rAF で確実に「初期→開」のフレーム分離（Safari/iOS対策）
  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true));
      });
    } else {
      setActive(false);
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (!isMounted) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMounted, onClose]);

  React.useEffect(() => {
    if (!isMounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMounted]);

  const handleTransitionEnd = () => {
    if (!active) setIsMounted(false);
  };

  if (!isMounted) return null;

  const modalNode = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={classNames(styles.MenuModalRoot, className)}
    >
      <div
        className={classNames(styles.Overlay, active && styles.isOpen)}
        onClick={onClose}
        onTransitionEnd={handleTransitionEnd}
      />
      <aside
        className={classNames(styles.Panel, active && styles.isOpen)}
        onTransitionEnd={handleTransitionEnd}
      >
        <button
          className={styles.CloseButton}
          aria-label="Close menu"
          onClick={onClose}
        >
          ×
        </button>

        {/* ここから既存の中身 */}
        <div className={styles.MenuModal__info}>
          <div className={styles.MenuModal__selectedPage}>
            <p>taste</p>
            <p>stay</p>
          </div>
          <ul className={styles.MenuModal__links}>
            <li>
              <a href="#philosophy" onClick={onClose}>
                Philosophy
              </a>
            </li>
            <li>
              <a href="#services" onClick={onClose}>
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={onClose}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#access" onClick={onClose}>
                Access
              </a>
            </li>
          </ul>
          <ul className={styles.MenuModal__links}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/watoto_kyoto/"
                onClick={onClose}
              >
                instagram
              </a>
            </li>
            <li>
              <a href="mailto:watoto.kyoto@gmail.com" onClick={onClose}>
                contact
              </a>
            </li>
          </ul>
          <div className={styles.MenuModal__address}>
            <p className={styles.MenuModal__addressJa}>
              <span>〒606-0805</span>
              <span>京都府京都市左京区下鴨森本町9</span>
            </p>
            <p className={styles.MenuModal__addressEn}>
              <span>9, Morimoto-cho, Shimogamo,</span>
              <span>Sakyo-ku, Kyoto</span>
              <span>606-0805, Japan</span>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );

  // ★ Portal
  if (typeof document !== "undefined") {
    return ReactDOM.createPortal(modalNode, document.body);
  }
  return null;
};

export default MenuModal;

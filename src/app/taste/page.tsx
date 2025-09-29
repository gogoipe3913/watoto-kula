"use client";

import TasteTop from "@/features/taste/Top";
import CategoryLabel from "@/features/taste/CategoryLabel";
import TasteMenu from "@/features/taste/TasteMenu";
import TastePhilosophy from "@/features/taste/Philosophy";
import styles from "./page.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Taste() {
  return (
    <div className={styles.Taste}>
      <CategoryLabel />
      <TasteMenu />
      <TasteTop />
      <TastePhilosophy />
      {/* <TasteTopSecond />
      <div className={styles.Taste__contents}>
        <TasteAbout />
        <TasteConcepts />
        <TasteGallery />
        <TasteAccess />
        <AnotherPageLink />
      </div>
      <Footer /> */}
    </div>
  );
}

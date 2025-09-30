"use client";

import TasteTop from "@/features/taste/Top";
import CategoryLabel from "@/features/taste/CategoryLabel";
import TasteMenu from "@/features/taste/TasteMenu";
import TastePhilosophy from "@/features/taste/Philosophy";
import TasteInsertImages from "@/features/taste/InsertImages";
import TasteServices from "@/features/taste/Services";
import TasteGallery from "@/features/taste/Gallery";
import styles from "./page.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TasteAccess from "@/features/taste/Access";

export default function Taste() {
  return (
    <div className={styles.Taste}>
      <CategoryLabel />
      <TasteMenu />
      <TasteTop />
      <TastePhilosophy />
      <TasteInsertImages />
      <TasteServices />
      <TasteGallery />
      <TasteAccess />
    </div>
  );
}

"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.Top}>
      <Link href="/bar" className={styles.Top__link}>
        <Image
          src="/top/bar_photo_1.JPG"
          alt="バーの写真1"
          width={720}
          height={967}
          className={styles.Top__image}
        />
        <p className={styles.Top__title}>Bar</p>
        <p className={styles.Top__textBar}>
          京都・下鴨に佇む、
          <br />
          多様な人々のための空間でカクテルを。
        </p>
      </Link>
      <Link href="/stay" className={styles.Top__link}>
        <Image
          src="/top/stay_photo_1.png"
          alt="宿の写真1"
          width={720}
          height={967}
          className={styles.Top__image}
        />
        <p className={styles.Top__title}>Stay</p>
        <p className={styles.Top__textStay}>
          福井/小浜の自然に囲まれて
          <br />
          自分だけの風景を探すひとときを。
        </p>
      </Link>
    </div>
  );
}

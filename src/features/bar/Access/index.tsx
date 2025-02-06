"use client";

import React from "react";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BarAccess: React.FC = ({}) => {
  return (
    <div className={styles.BarAccess}>
      <h2>Access</h2>
      <div className={styles.BarAccess__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.8236275985773!2d135.76866277604233!3d35.03614196514035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109003442389b%3A0x33caf22d3d0300b1!2swatoto!5e0!3m2!1sja!2sjp!4v1738737748856!5m2!1sja!2sjp"
          width="600"
          height="460"
          style={{ border: "0" }}
          loading="lazy"
          className={styles.BarAccess__mapBody}
        />
        <div />
      </div>
      <div className={styles.BarAccess__information}>
        <div>
          <h3>所在地</h3>
          <div className={styles.BarAccess__address}>
            <p>〒606-0805</p>
            <p>京都府京都市左京区下鴨森本町9</p>
          </div>
          <ul className={styles.BarAccess__roadTime}>
            <li>
              <p className={styles.BarAccess__roadTimeTextJp}>
                京都駅より京都市バス205/4系統
              </p>
              <p className={styles.BarAccess__roadTimeTextEn}>
                By car from Kyoto Station
              </p>
            </li>
            <li className={styles.BarAccess__roadTimeRight}>
              <p className={styles.BarAccess__roadTimeTextJp}>約30分</p>
              <p className={styles.BarAccess__roadTimeTextEn}>About 30 min</p>
            </li>
          </ul>
          <ul className={styles.BarAccess__roadTime}>
            <li>
              <p className={styles.BarAccess__roadTimeTextJp}>
                京阪出町柳駅より徒歩
              </p>
              <p className={styles.BarAccess__roadTimeTextEn}>
                By train, taxi from Kyoto Station
              </p>
            </li>
            <li>
              <p className={styles.BarAccess__roadTimeTextJp}>約10分</p>
              <p className={styles.BarAccess__roadTimeTextEn}>About 10 min</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>営業時間</h3>
          <ul className={styles.BarAccess__openingHours}>
            <li>
              <p className={styles.BarAccess__openingHoursJp}>不定休</p>
              <p className={styles.BarAccess__openingHoursEn}>
                Irregular holidays
              </p>
            </li>
            <li>
              <p className={styles.BarAccess__openingHoursJp}>11:00~23:00</p>
            </li>
          </ul>
          <p className={styles.BarAccess__openingHoursNote}>
            ランチ営業は基本的には月・木がお休みです。
            <br />
            営業についてはInstagramをご覧ください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarAccess;

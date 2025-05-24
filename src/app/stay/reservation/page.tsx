"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import styles from "./page.module.scss";
import ContactForm from "@/components/ContactForm";

export default function Reservation() {
  return (
    <div className={styles.Reservation}>
      <div>
        <h2 className={styles.Reservation__title}>
          <p className={styles.Reservation__titleJa}>空室を確認する</p>
          <p className={styles.Reservation__titleEn}>Check room availability</p>
        </h2>
        <p className={styles.Reservation__text}>
          はじめに、予約日程の空室をご確認ください。
        </p>
        <div className={styles.Reservation__calendar}>
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            initialView="dayGridMonth"
            googleCalendarApiKey="AIzaSyAShrvs3a4xRMxfY8ND8AY4q-Sx5gXeSZY"
            events={{
              googleCalendarId:
                "87d7e10665681782805d414216253dc04c89c1073cc0a15ef6cf018442fe9ecc@group.calendar.google.com",
              className: `${styles.Reservation__calendarEventLabel}`,
            }}
          />
        </div>
      </div>
      <div>
        <h2 className={styles.Reservation__title}>
          <p className={styles.Reservation__titleJa}>予約フォーム</p>
          <p className={styles.Reservation__titleEn}>Reservation form</p>
        </h2>
        <p className={styles.Reservation__text}>
          フォームを入力し、宿泊予約を進めてください。
          <br />
          入力完了後メールにて支払いリンクを送信しますので、お支払いをお願いします。
          <br />
          料金や宿情報は、
          <a
            href="https://www.instagram.com/p/DJQVh_SBqoS/?img_index=1"
            className={styles.Reservation__link}
          >
            こちら
          </a>
          からご確認ください。
        </p>
        <div className={styles.Reservation__form}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

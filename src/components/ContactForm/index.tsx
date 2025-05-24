"use client";

import { ChangeEventHandler, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type FormInputItemProps = {
  itemTitle: string;
  name: string;
  placeholder: string;
  value?: string | number;
  notation?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
};

const FormInputItem: React.FC<FormInputItemProps> = ({
  itemTitle,
  name,
  placeholder,
  value,
  notation,
  onChange,
  required,
}) => (
  <div className={style.ContactForm__inputItem}>
    {notation ? (
      <>
        <div className={style.ContactForm__inputItemTitleWithNotation}>
          <p
            className={classNames(
              style.ContactForm__inputItemTitle,
              required ? style["ContactForm__inputItemTitle--required"] : ""
            )}
          >
            {itemTitle}
          </p>
          <p className={style.ContactForm__inputItemNotation}>{notation}</p>
        </div>
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={style.ContactForm__inputItemBody}
        />
      </>
    ) : (
      <>
        <p
          className={classNames(
            style.ContactForm__inputItemTitle,
            required ? style["ContactForm__inputItemTitle--required"] : ""
          )}
        >
          {itemTitle}
        </p>
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={style.ContactForm__inputItemBody}
        />
      </>
    )}
  </div>
);

const ContactForm: React.FC = ({}) => {
  const [form, setForm] = useState({
    name: "",
    nameKana: "",
    email: "",
    tel: "",
    postalCode: "",
    address: "",
    headCountAdult: "",
    headCountChild: "",
    headCountBaby: "",
    checkInDate: "",
    checkOutDate: "",
    checkInTime: "",
    message: "",
    agreeReservationConfirmation: false,
    // agreePrivacyPolicy: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("送信中...");
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("送信成功！");
      setForm({
        name: "",
        nameKana: "",
        email: "",
        tel: "",
        postalCode: "",
        address: "",
        headCountAdult: "",
        headCountChild: "",
        headCountBaby: "",
        checkInDate: "",
        checkOutDate: "",
        checkInTime: "",
        message: "",
        agreeReservationConfirmation: false,
        // agreePrivacyPolicy: false,
      });
    } else {
      setStatus("送信失敗");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.ContactForm}>
      <FormInputItem
        itemTitle="お名前"
        name="name"
        placeholder="下鴨 矢三郎"
        value={form.name}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="おなまえ（ふりがな）"
        name="nameKana"
        placeholder="しもがも やざぶろう"
        value={form.nameKana}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="メールアドレス"
        name="email"
        placeholder="lita@watoto.com"
        value={form.email}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="電話番号"
        name="tel"
        placeholder="09012345678"
        value={form.tel}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="郵便番号"
        name="postalCode"
        placeholder="1110900"
        value={form.postalCode}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="ご住所"
        name="address"
        placeholder="京都府京都市左京区 わととマンション 101"
        value={form.address}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="宿泊人数（大人）"
        name="headCountAdult"
        placeholder="5"
        value={form.headCountAdult}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="宿泊人数（4~9歳）"
        name="headCountChild"
        placeholder="3"
        value={form.headCountChild}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="宿泊人数（3歳以下）"
        notation="※3歳以下のお子様の宿泊料は無料です"
        name="headCountBaby"
        placeholder="1"
        value={form.headCountBaby}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="ご希望のチェックイン日"
        name="checkInDate"
        placeholder="2025/10/01"
        value={form.checkInDate}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="ご希望のチェックアウト日"
        name="checkOutDate"
        placeholder="2025/10/02"
        value={form.checkOutDate}
        onChange={handleChange}
        required={true}
      />
      <FormInputItem
        itemTitle="チェックイン時間"
        name="checkInTime"
        placeholder="15:00"
        value={form.checkInTime}
        onChange={handleChange}
        required={true}
      />
      <div className={style.ContactForm__textareaItem}>
        <p className={style.ContactForm__inputItemTitle}>備考欄</p>
        <textarea
          name="message"
          placeholder="自転車3台のレンタル、ピザ窯の使用を希望します。"
          value={form.message}
          onChange={handleChange}
          className={style.ContactForm__textarea}
        />
      </div>
      <div className={style.ContactForm__confirm}>
        <p>
          送信時点でご予約を確定できるものではございません。
          メール送付による決済完了をもって確定となりますので、あらかじめご了承の上、チェックをお願いします。
        </p>
        <label>
          <input
            type="checkbox"
            name="agreeReservationConfirmation"
            checked={form.agreeReservationConfirmation}
            onChange={handleChange}
            required={true}
          />
          確認しました
        </label>
      </div>
      {/* <div className={style.ContactForm__confirm}>
        <p>
          プライバシーポリシーをご確認の上、同意するにチェックをお願いします。
        </p>
        <label>
          <input
            type="checkbox"
            name="agreePrivacyPolicy"
            checked={form.agreePrivacyPolicy}
            onChange={handleChange}
            required={true}
          />
          同意します
        </label>
      </div> */}
      <button type="submit" className={style.ContactForm__submitButton}>
        予約を申し込む
      </button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;

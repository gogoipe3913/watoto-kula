"use client";

import { ChangeEvent, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type FormInputItemProps = {
  itemTitle: string;
  name: string;
  placeholder: string;
  value?: string | number;
  notation?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  error?: boolean;
  errorMessage?: string;
};

const FormInputItem: React.FC<FormInputItemProps> = ({
  itemTitle,
  name,
  placeholder,
  value,
  notation,
  onChange,
  required,
  error,
  errorMessage,
}) => (
  <div className={style.ContactForm__inputItem}>
    {notation ? (
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
    ) : (
      <p
        className={classNames(
          style.ContactForm__inputItemTitle,
          required ? style["ContactForm__inputItemTitle--required"] : ""
        )}
      >
        {itemTitle}
      </p>
    )}
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={classNames(
        style.ContactForm__inputItemBody,
        error ? style["ContactForm__inputItemBody--error"] : ""
      )}
    />
    {error && errorMessage && (
      <p className={style.ContactForm__errorMessage}>{errorMessage}</p>
    )}
  </div>
);

const ContactForm: React.FC = () => {
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
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setForm({
        ...form,
        [name]: e.target.checked,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const requiredFields = [
      "name",
      "nameKana",
      "email",
      "tel",
      "postalCode",
      "address",
      "headCountAdult",
      "headCountChild",
      "headCountBaby",
      "checkInDate",
      "checkOutDate",
      "checkInTime",
    ];

    requiredFields.forEach((key) => {
      if (!form[key as keyof typeof form]) {
        newErrors[key] = "この項目は必須です。";
      }
    });

    if (form.email && !/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(form.email)) {
      newErrors["email"] = "正しいメールアドレスを入力してください。";
    }

    const numericFields = [
      "tel",
      "postalCode",
      "headCountAdult",
      "headCountChild",
      "headCountBaby",
    ];
    numericFields.forEach((key) => {
      const value = form[key as keyof typeof form];
      if (value && !/^\d+$/.test(String(value))) {
        newErrors[key] = "数字のみで入力してください。";
      }
    });

    if (!form.agreeReservationConfirmation) {
      newErrors["agreeReservationConfirmation"] = "確認が必要です。";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("入力に不備があります。");
      return;
    }

    setErrors({});
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
        required
        error={!!errors.name}
        errorMessage={errors.name}
      />
      <FormInputItem
        itemTitle="おなまえ（ふりがな）"
        name="nameKana"
        placeholder="しもがも やざぶろう"
        value={form.nameKana}
        onChange={handleChange}
        required
        error={!!errors.nameKana}
        errorMessage={errors.nameKana}
      />
      <FormInputItem
        itemTitle="メールアドレス"
        name="email"
        placeholder="lita@watoto.com"
        value={form.email}
        onChange={handleChange}
        required
        error={!!errors.email}
        errorMessage={errors.email}
      />
      <FormInputItem
        itemTitle="電話番号"
        name="tel"
        placeholder="09012345678"
        value={form.tel}
        onChange={handleChange}
        required
        error={!!errors.tel}
        errorMessage={errors.tel}
      />
      <FormInputItem
        itemTitle="郵便番号"
        name="postalCode"
        placeholder="1110900"
        value={form.postalCode}
        onChange={handleChange}
        required
        error={!!errors.postalCode}
        errorMessage={errors.postalCode}
      />
      <FormInputItem
        itemTitle="ご住所"
        name="address"
        placeholder="京都府京都市左京区 わととマンション 101"
        value={form.address}
        onChange={handleChange}
        required
        error={!!errors.address}
        errorMessage={errors.address}
      />
      <FormInputItem
        itemTitle="宿泊人数（大人）"
        name="headCountAdult"
        placeholder="5"
        value={form.headCountAdult}
        onChange={handleChange}
        required
        error={!!errors.headCountAdult}
        errorMessage={errors.headCountAdult}
      />
      <FormInputItem
        itemTitle="宿泊人数（4~9歳）"
        name="headCountChild"
        placeholder="3"
        value={form.headCountChild}
        onChange={handleChange}
        required
        error={!!errors.headCountChild}
        errorMessage={errors.headCountChild}
      />
      <FormInputItem
        itemTitle="宿泊人数（3歳以下）"
        notation="※3歳以下のお子様の宿泊料は無料です"
        name="headCountBaby"
        placeholder="1"
        value={form.headCountBaby}
        onChange={handleChange}
        required
        error={!!errors.headCountBaby}
        errorMessage={errors.headCountBaby}
      />
      <FormInputItem
        itemTitle="ご希望のチェックイン日"
        name="checkInDate"
        placeholder="2025/10/01"
        value={form.checkInDate}
        onChange={handleChange}
        required
        error={!!errors.checkInDate}
        errorMessage={errors.checkInDate}
      />
      <FormInputItem
        itemTitle="ご希望のチェックアウト日"
        name="checkOutDate"
        placeholder="2025/10/02"
        value={form.checkOutDate}
        onChange={handleChange}
        required
        error={!!errors.checkOutDate}
        errorMessage={errors.checkOutDate}
      />
      <FormInputItem
        itemTitle="チェックイン時間"
        name="checkInTime"
        placeholder="16:00"
        value={form.checkInTime}
        onChange={handleChange}
        required
        error={!!errors.checkInTime}
        errorMessage={errors.checkInTime}
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
          送信時点でご予約を確定できるものではございません。メール送付による決済完了をもって確定となりますので、あらかじめご了承の上、チェックをお願いします。
        </p>
        <label>
          <input
            type="checkbox"
            name="agreeReservationConfirmation"
            checked={form.agreeReservationConfirmation}
            onChange={handleChange}
          />
          確認しました
        </label>
        {errors.agreeReservationConfirmation && (
          <p className={style.ContactForm__errorMessage}>
            {errors.agreeReservationConfirmation}
          </p>
        )}
      </div>

      <button type="submit" className={style.ContactForm__submitButton}>
        予約を申し込む
      </button>
      <p className={style.ContactForm__submitStatus}>{status}</p>
    </form>
  );
};

export default ContactForm;

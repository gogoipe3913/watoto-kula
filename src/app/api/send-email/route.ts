import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const {
    name,
    nameKana,
    email,
    tel,
    postalCode,
    address,
    headCountAdult,
    headCountChild,
    headCountBaby,
    checkInDate,
    checkOutDate,
    checkInTime,
    message,
    agreeReservationConfirmation,
    // agreePrivacyPolicy,
  } = data;

  const mailTextBody = `
  watoto stay Lita ホームページからの予約リクエストがありました。
  -----------------
    お名前: ${name}
    お名前(かな): ${nameKana}
    メールアドレス: ${email}
    電話番号: ${tel}
    郵便番号: ${postalCode}
    住所: ${address}
    大人の人数: ${headCountAdult}
    子供の人数: ${headCountChild}
    赤ちゃんの人数: ${headCountBaby}
    チェックイン日: ${checkInDate}
    チェックアウト日: ${checkOutDate}
    チェックイン時間: ${checkInTime}
    備考欄: ${message}

    予約確認の同意: ${
      agreeReservationConfirmation ? "確認しました" : "確認していません"
    }
    -----------------
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "taiki.kishiyama@gmail.com",
      subject: `新しいお問い合わせ from ${name} 様`,
      text: mailTextBody,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}

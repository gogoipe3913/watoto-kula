"use client";

import styles from "./page.module.scss";

export default function Stay() {
  return (
    <div className={styles.LegalNotice}>
      <h1 className={styles.LegalNotice__title}>
        <p className={styles.LegalNotice__titleJa}>特定商取引法に基づく表記</p>
        <p className={styles.LegalNotice__titleEn}>Legal notice</p>
      </h1>

      <ul className={styles.LegalNotice__items}>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>サービス名</p>
          <p className={styles.LegalNotice__itemValue}>watoto stay Lita</p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>事業者名</p>
          <p className={styles.LegalNotice__itemValue}>watoto stay Lita</p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>代表者名</p>
          <p className={styles.LegalNotice__itemValue}>梶本良司</p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>所在地</p>
          <p className={styles.LegalNotice__itemValue}>
            〒917-0245 福井県小浜市忠野9-14
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>お問い合わせ先</p>
          <p className={styles.LegalNotice__itemValue}>
            cafe.watoto0617@gmail.com
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>販売価格</p>
          <p className={styles.LegalNotice__itemValue}>
            基本料金と人数料金を組み合わせた料金体系です。
            <br />
            <br />
            【基本料金（1泊1棟あたり）】
            <br />
            ・金/土/日/祝前日：20,000円
            <br />
            ・平日：15,000円
            <br />
            ・2連泊目：10,000円
            <br />
            ・3泊目以降無料（最大5泊まで）
            <br />
            <br />
            【人数料金】
            <br />
            ・大人1名あたり：＋5,000円
            <br />
            ・子ども（4~9歳）1名あたり：＋3,000円
            <br />
            ・3歳以下：無料
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>販売数量</p>
          <p className={styles.LegalNotice__itemValue}>1日につき1組様まで</p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>ご予約期限</p>
          <p className={styles.LegalNotice__itemValue}>
            原則として、3ヶ月先までのご予約を承ります。ご希望の予約に関しての空席情報をご確認ください。
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>お支払い方法</p>
          <p className={styles.LegalNotice__itemValue}>クレジットカード</p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>お支払い期限</p>
          <p className={styles.LegalNotice__itemValue}>
            ご予約時点でのお支払い
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>キャンセル料</p>
          <p className={styles.LegalNotice__itemValue}>
            キャンセルのタイミングによっては、当宿が定めるキャンセルポリシーに基づき、キャンセル料が発生する場合があります。
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>
            交換および返品
            <br className={styles.LegalNotice__pcOnly} />
            （返金ポリシー）
          </p>
          <p className={styles.LegalNotice__itemValue}>
            宿泊者が自己の都合により宿泊契約を解除する場合は、当施設が定めるキャンセルポリシーに従い、以下のとおり違約金（取消料）を申し受けます。
            <br />
            <br />
            2日前：宿泊料金の30%
            <br />
            前日：宿泊料金の50%
            <br />
            当日：宿泊料金の100%
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>
            販売価格以外で
            <br className={styles.LegalNotice__pcOnly} />
            発生する金銭
          </p>
          <p className={styles.LegalNotice__itemValue}>
            施設ご利用時の薪や珈琲豆販売は、別料金となっております。
            <br />
            また、当サイトのページの閲覧等に必要となるインターネット接続料金、
            通信料金は、お客様のご負担となります。
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>
            商品(サービス含む)
            <br className={styles.LegalNotice__pcOnly} />
            の引き渡し時期
          </p>
          <p className={styles.LegalNotice__itemValue}>
            宿泊予約確定時にご指定いただいた宿泊日になります。
          </p>
        </li>
        <li className={styles.LegalNotice__item}>
          <p className={styles.LegalNotice__itemKey}>特別条件</p>
          <div>
            <p className={styles.LegalNotice__itemValue}>
              1. クーリングオフについて
              <br />
              特定商取引法に規定されているクーリングオフが適用されるサービス
              ではありません。
            </p>
            <p className={styles.LegalNotice__itemValue}>
              2. 表現に関する注意事項
              <br />
              ホームページに掲載された内容について、情報雑誌、その他の情報媒体および
              事業者が提示している条件と異なる場合があります。
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

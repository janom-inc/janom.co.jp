import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ExternalLink from "@/components/ExternalLink";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "事業内容 » 暗号通貨関連サービス" };

type Service = {
  name: string;
  url?: string;
  image: string;
  imageClassName?: string;
  description: ReactNode;
};

const services: Service[] = [
  {
    name: "コインギフト",
    url: "https://coingift.jp/",
    image: "/img/services/coingift_logo.png",
    description: (
      <>
        <p>Bitcoin や Monacoin 建てで様々なギフト券を購入することのできるウェブサービス。</p>
        <p>
          多くの EC
          サービスでありがちな面倒な会員登録作業などは一切なく、非常に簡単かつ瞬時に様々な暗号通貨・仮想通貨をギフト券に交換し、現実世界でお買い物ができる。
        </p>
        <p>
          コインギフトのバックエンドは
          <ExternalLink href="http://www.slideshare.net/visvirial/ss-48736619">
            非常に軽量・セキュア・スケーラブルな設計
          </ExternalLink>
          となっており、バックエンドを転用した EC サービスの新規立ち上げなども行っている。（詳細は
          <Link href="/contact">お問い合わせ</Link>ください）
        </p>
      </>
    ),
  },
  {
    name: "CoinTip",
    url: "https://cointip.jp/",
    image: "/img/services/cointip_logo.png",
    description: (
      <>
        <p>Twitter 等の SNS を用いて誰でも簡単に Bitcoin をやり取りすることのできる投げ銭サービス。</p>
        <p>
          例えば Twitter アカウント <span className="tip-account">@janom_llc</span> 宛に 12.34mBTC
          のチップを行いたい場合には「<span className="tip-account">@cointip_jp</span> <b>tip</b>{" "}
          <span className="tip-account">@janom_llc</span> <span className="tip-amount">12.34</span>
          」といった非常にシンプルな命令をツイートするだけで送金が行えるのが特徴。
        </p>
        <p>（※ こちらのサービスは株式会社セレス[東証マザーズ 3696]様との共同開発・運営プロジェクトとなっております。）</p>
      </>
    ),
  },
  {
    name: "もなとれ",
    url: "https://monatr.jp/",
    image: "/img/services/monatr_logo.png",
    description: (
      <>
        <p>Monacoin を中心とする、国内最古の暗号通貨交換所。</p>
        <p>
          2014年1月の Monacoin リリース後すぐに運営が開始され、その後の Mt.Gox
          社の破綻により現存する国内取引所の中では最古の取引所となる。
        </p>
        <p>国内で開発された暗号通貨を多数取り扱っているのが特徴。</p>
      </>
    ),
  },
  {
    name: "ASICpool.info",
    url: "https://asicpool.info/",
    image: "/img/services/asicpool_screenshot.png",
    description: (
      <>
        <p>Monacoin 専用の世界最大（2016年3月時点）マイニングプール。</p>
        <p>接続先サーバを日本・ヨーロッパ・アメリカと世界各地に分散させており、採掘機の場所に応じて最適な接続先を選択できるのが特徴。</p>
        <p>
          採掘能力に応じた接続先ポートを複数用意することで、クラウドマイニングサービスを利用した大採掘能力を持った採掘者にいち早く対応した。
        </p>
      </>
    ),
  },
  {
    name: "暗号通貨長者番付",
    url: "https://anban.info/",
    image: "/img/services/anban_screenshot.png",
    imageClassName: "rounded",
    description: (
      <>
        <p>国内暗号通貨（Monacoin、Kumacoin等）に特化した保有数ランキング掲載サイト。</p>
        <p>公開鍵暗号の仕組みを利用した、自己の保有するアドレスへのタグ付けなどの独創的な機能を採用している。</p>
        <p>
          独自にカスタマイズしたソフトウェアを利用して暗号通貨クライアントソフトの吐き出すデータファイルを解析・集計し、一日毎に自動的にランキングの更新を行っている。
        </p>
      </>
    ),
  },
  {
    name: "その他",
    image: "/img/services/crypto-users-logo-square.png",
    description: (
      <>
        <p>
          弊社メンバは、Bitcoinコアクライアントの翻訳・暗号通貨ユーザ会（オープンソース系イベントへの参加を中心として活動中）の立ち上げ・Monacoin
          Foundation（Monacoin関連のイベント・勉強会・オフ会を運営）など、暗号通貨の普及活動を積極的に行っている。
        </p>
        <p>
          また、高機能かつデザイン性の高いブレインウォレット「
          <ExternalLink href="https://offlinewallet.info/">OfflineWallet.info</ExternalLink>」や、Monacoin および
          Bitcoin に対応したブロックエクスプローラ「
          <ExternalLink href="http://chainsight.info/">chainsight.info</ExternalLink>
          」など、他にも様々なサービスを展開している。
        </p>
      </>
    ),
  },
];

export default function CryptocurrencyPage() {
  return (
    <>
      <PageHeader>事業内容 &raquo; 暗号通貨関連サービス</PageHeader>
      <div className="grid cols-3">
        {services.map((s) => (
          <article key={s.name} className="card">
            <div className="card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={`${s.name} のロゴ`} className={s.imageClassName} />
            </div>
            <div className="card-caption">
              <h3>{s.url ? <ExternalLink href={s.url}>{s.name}</ExternalLink> : s.name}</h3>
              {s.description}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

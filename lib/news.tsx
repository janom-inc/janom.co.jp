import type { ReactNode } from "react";
import ExternalLink from "@/components/ExternalLink";

export type NewsItem = {
  /** ISO date (YYYY-MM-DD). */
  date: string;
  body: ReactNode;
};

/** News items. Newer items first. */
export const news: NewsItem[] = [
  {
    date: "2023-08-08",
    body: <>オフィスを移転しました（東京都墨田区向島 &rarr; 菊川）。</>,
  },
  {
    date: "2023-06-30",
    body: (
      <>
        プレスリリース（
        <a href="/pdf/releases/20230630_ellipticpir_patent_and_trademark.pdf">
          検索匿名化技術「Private Information Retrieval」の高効率実装「EllipticPIR」の特許・商標出願のお知らせ
        </a>
        ）を発表しました。
      </>
    ),
  },
  {
    date: "2022-06-30",
    body: (
      <>
        ブロックチェーン上の新しい金融基盤である DeFi に関する投資情報を発信するメディア
        <ExternalLink href="https://defire.jp/">「DeFIRE」</ExternalLink>
        を正式ローンチしました（
        <ExternalLink href="https://kerneltribe.co.jp/">合同会社KernelTribe</ExternalLink>
        との共同事業）。
      </>
    ),
  },
  {
    date: "2022-01-01",
    body: <>オフィスを移転しました（東京都文京区本郷 &rarr; 東京都墨田区向島）。</>,
  },
  {
    date: "2018-10-18",
    body: <>オフィスを移転しました（東京都文京区白山 &rarr; 本郷）。</>,
  },
  {
    date: "2016-12-01",
    body: (
      <>
        弊社代表の日向が「
        <ExternalLink href="http://amzn.to/2ggmh9O">情報処理2016年12月号 (情報処理学会の学会誌)</ExternalLink>
        」に技術解説記事「ビットコイン改善提案 最前線／マークル化抽象構文木」を寄稿しました
      </>
    ),
  },
  {
    date: "2016-11-16",
    body: (
      <>
        Bitcoin 投げ銭サービス「<ExternalLink href="https://cointip.jp/">CoinTip (コインチップ)</ExternalLink>
        」をリリースしました。株式会社セレス(東証マザーズ 3696)様との共同開発・運営プロジェクトとなっております (
        <ExternalLink href="http://v4.eir-parts.net/v4Contents/View.aspx?cat=tdnet&sid=1421099">
          セレス様発表資料 [PDF]
        </ExternalLink>
        )
      </>
    ),
  },
  {
    date: "2016-11-14",
    body: (
      <>
        弊社代表の日向が「
        <ExternalLink href="http://amzn.to/2ggkcL7">
          この1冊でまるごとわかる　ブロックチェーン＆ビットコイン (日経BP)
        </ExternalLink>
        」に技術解説記事「注目キーワード解説／マルチシグネチャ」を寄稿しました
      </>
    ),
  },
  {
    date: "2016-10-01",
    body: (
      <>
        株式会社オウケイウェイヴ (名証セントレックス 3808) 様に対し Bitcoin
        の技術教育プログラム「ブロックチェーン大学校」のカリキュラムを実施しました。2016年10月〜11月にかけて毎週行う全8回の講義となります (
        <ExternalLink href="http://www.okwave.co.jp/press/20160929/">オウケイウェイヴ様発表資料</ExternalLink>)
      </>
    ),
  },
  {
    date: "2016-07-25",
    body: (
      <>
        ビットコインハードウェアウォレットの米KeepKey社と提携し、日本国内での独占販売権を取得しました。またコインギフトにて販売を開始しました (
        <ExternalLink href="https://coingift.jp/invoices/create/57908787-e2ec-4e55-905d-04f16c3db725">
          商品案内ページ
        </ExternalLink>
        ／
        <ExternalLink href="/pdf/releases/20160725_keepkey_exclusive_reseller.pdf">報道関係者向け資料 [PDF]</ExternalLink>)
      </>
    ),
  },
  {
    date: "2016-06-06",
    body: (
      <>
        株式会社セレス(東証マザーズ 3696)様との業務提携を行いました (
        <ExternalLink href="https://t.co/vOQuUHfSo7">セレス様発表資料 [PDF]</ExternalLink>)
      </>
    ),
  },
  { date: "2016-03-08", body: <>事業内容ページを作成</> },
  { date: "2014-11-01", body: <>ウェブページ公開</> },
  { date: "2014-10-06", body: <>会社設立</> },
];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}/${m}/${d}`;
}

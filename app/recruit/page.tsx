import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ExternalLink from "@/components/ExternalLink";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "採用情報" };

type Job = {
  title: string;
  rows: { label: string; content: ReactNode }[];
};

const jobs: Job[] = [
  {
    title: "バックオフィス業務",
    rows: [
      { label: "職種", content: "総務（事務、経理、発送作業など全般業務）" },
      { label: "雇用形態", content: "アルバイト、または契約社員" },
      { label: "給与", content: "時給 1,200 円以上（アルバイト）、または月給 20 万円以上（契約社員）" },
      {
        label: "応募資格",
        content: (
          <ul>
            <li>
              必須スキル
              <ul>
                <li>暗号通貨（ビットコイン、モナーコイン、NEM、イーサリアム等）に興味があり、継続して勉強していく意欲のある方</li>
              </ul>
            </li>
            <li>
              歓迎スキル
              <ul>
                <li>英語（メールや対面でのやり取りができる程度）</li>
                <li>簿記（日商簿記３級レベル）</li>
                <li>ハードウェアウォレットの仕組みや使い方などの知識</li>
                <li>ECサービスの運営経験</li>
              </ul>
            </li>
          </ul>
        ),
      },
      {
        label: "業務内容",
        content: (
          <>
            <p>主に、弊社ECサービス「コインギフト」のバックオフィス業務全般を担当していただきます。</p>
            <p>
              例えば、海外の仕入先との交渉（英語）や商品発送・入荷作業、顧客からの問い合わせ対応などをスキルやご関心に合わせてお手伝いいただきます。
            </p>
          </>
        ),
      },
      { label: "勤務時間", content: "要相談（柔軟に対応いたします）" },
      { label: "勤務地", content: <Link href="/about">後楽園オフィス</Link> },
    ],
  },
  {
    title: "エンジニア／プログラマ",
    rows: [
      { label: "職種", content: "エンジニア／プログラマ" },
      { label: "雇用形態", content: "アルバイト／インターン" },
      { label: "給与", content: "時給 1,600 円以上（スキルに応じて決定）" },
      {
        label: "応募資格",
        content: (
          <ul>
            <li>
              必須スキル
              <ul>
                <li>Linux コマンドによる作業</li>
                <li>PHP (CakePHP / Laravel)</li>
                <li>Node.js / JavaScript</li>
                <li>日本語または英語</li>
              </ul>
            </li>
            <li>
              歓迎スキル
              <ul>
                <li>C / C++</li>
                <li>
                  Bitcoin / Blockchain に関する知識 (
                  <ExternalLink href="http://amzn.to/2h15312">Mastering Bitcoin</ExternalLink> 程度の知識)
                </li>
                <li>マイコン制御 (AVR)</li>
                <li>GPGPU (OpenCL)</li>
                <li>
                  AWS, GCP 等のクラウドサービスまたは Digital Ocean, Vultr, さくらVPS
                  等を用いたプライベートネットワークの構築・運用経験
                </li>
                <li>基礎的な情報科学の知識（群論・線形代数を含む）</li>
                <li>
                  暗号学で用いる基礎数学 (Euclid互除法, 中国剰余定理, 平方剰余則, 有限生成Abel群の基本定理, 楕円曲線論,
                  Lambda, etc.)
                </li>
                <li>
                  暗号アルゴリズム (RSA, Diffie-Hellmann, DSA, Schnorr, Solovay-Strassen, Miller-Rabin, Pollard&apos;s ρ,
                  擬似乱数, ハッシュ関数 etc.)
                </li>
                <li>暗号理論 (ゼロ知識証明, リング署名, コミットメント, Multi-Party Computation, etc.)</li>
              </ul>
            </li>
          </ul>
        ),
      },
      {
        label: "業務内容",
        content: (
          <>
            <p>以下の中からスキルやご関心に合わせて担当していただきます。</p>
            <ul>
              <li>弊社独自サービスの開発・改善・保守</li>
              <li>ビットコイン・ブロックチェーンに関する受託案件の開発</li>
              <li>その他受託案件の開発・マネージメント</li>
              <li>ビットコイン・ブロックチェーン・暗号技術を用いたコンサルティング</li>
            </ul>
            <p>日本国内でビットコイン・ブロックチェーンに関する業務に携われる数少ない機会となりますので、ぜひご応募ください。</p>
          </>
        ),
      },
      { label: "勤務時間", content: "要相談" },
      {
        label: "勤務地",
        content: (
          <>
            勤務地：在宅勤務、または弊社<Link href="/about">後楽園オフィス</Link>（要相談）
          </>
        ),
      },
    ],
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeader>採用情報</PageHeader>
      <p>
        弊社では暗号通貨に興味・関心のある方を広く募集しています。
        以下の募集要項をご確認いただき、お問い合わせ用メールアドレス (info-at-janom.co.jp)
        まで以下の内容をご記載のうえご連絡ください。
      </p>
      <ul>
        <li>お名前（漢字・ふりがな）</li>
        <li>学歴・職歴</li>
        <li>スキル</li>
        <li>過去に携わったプロジェクトの詳細 (エンジニアの方は GitHub リポジトリやアプリ名) および担当内容</li>
        <li>
          希望する職種や業務内容（例：暗号通貨を用いた新規事業開発に携わりたい、コインギフトで販売を行うオリジナルグッズの企画立案をやりたい、等）
        </li>
        <li>応募動機（暗号通貨に興味がある、勤務形態が魅力的、等）</li>
        <li>その他連絡事項（あれば）</li>
      </ul>

      <PageHeader level={2} decorated={false}>
        募集中の職種一覧
      </PageHeader>

      {jobs.map((job) => (
        <section key={job.title}>
          <h3>{job.title}</h3>
          <table className="table narrow responsive">
            <tbody>
              {job.rows.map((row, i) => (
                <tr key={row.label}>
                  <th style={i === 0 ? { width: 100 } : undefined}>{row.label}</th>
                  <td>{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}

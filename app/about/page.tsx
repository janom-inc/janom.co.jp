import type { Metadata } from "next";
import ExternalLink from "@/components/ExternalLink";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "会社概要" };

export default function AboutPage() {
  return (
    <>
      <PageHeader>会社概要</PageHeader>
      <table className="table company-table responsive">
        <tbody>
          <tr>
            <th>会社名</th>
            <td>合同会社ジャノム (Janom LLC)</td>
          </tr>
          <tr>
            <th>代表 (CEO)</th>
            <td>
              日向 理彦 (ひゅうが まさひこ)
              <br />[ <ExternalLink href="https://www.facebook.com/hyugam">Facebook</ExternalLink> |{" "}
              <ExternalLink href="https://www.linkedin.com/in/masahiko-hyuga-2a51b2a5">LinkedIn</ExternalLink> ]
            </td>
          </tr>
          <tr>
            <th>設立</th>
            <td>2014年10月</td>
          </tr>
          <tr>
            <th>本店登記地</th>
            <td>
              〒130-0024
              <br />
              東京都墨田区菊川3-6-6
            </td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>
              <ul>
                <li>暗号通貨(Bitcoin)・仮想通貨・ブロックチェインに関連した自社サービス開発運営、コンサルティング</li>
                <li>システム開発・ウェブ製作</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

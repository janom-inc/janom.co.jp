import type { Metadata } from "next";
import ExternalLink from "@/components/ExternalLink";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "メンバー紹介" };

export default function MembersPage() {
  return (
    <>
      <PageHeader>メンバー紹介</PageHeader>
      <table className="table narrow responsive">
        <tbody>
          <tr>
            <th style={{ width: 150 }}>氏名</th>
            <td>日向 理彦（ひゅうが まさひこ）</td>
          </tr>
          <tr>
            <th>役職</th>
            <td>代表社員 (CEO)</td>
          </tr>
          <tr>
            <th>略歴</th>
            <td>
              神奈川県内の名門進学校より東京大学理科I類に入学後、同大理学部物理学科へ進学。学部卒業後、同大総合文化研究科修士課程へ進学し長距離相互作用のある系の熱力学・統計力学的性質の研究により修士号を取得。その後同研究科の博士課程に進学するが、暗号通貨（Bitcoin）の理論的斬新さに魅了され紆余曲折を経て本企業を設立する。
            </td>
          </tr>
          <tr>
            <th>挨拶</th>
            <td>
              <p>各所で「物理学・情報科学・数学の研究者、インベンター」という肩書を名乗らせていただいております。</p>
              <p>
                個人的には、応用よりも基礎論の方に強い興味があります。「基礎論」という単語は一般にはあまりイメージがないかもしれませんが、例えば物理学では量子基礎論という分野があり「なぜ物理法則は波動函数なるもので与えられるのか」「重ね合わせ状態とは何か？本質的な概念なのか？」といった、ものの仕組みの更に奥深くにある哲学や数学を探求する学問です。
              </p>
              <p>
                物理学や数学の知識を道具として利用し、応用事例を考案・開発（例えば青色LEDの開発、公開鍵暗号の仕組みを用いたセキュアなチャットアプリの開発等）することに焦点が当てられることが一般的には多いと思いますが、「基礎論」はその対極に位置づけることのできる研究分野であり、応用研究・応用開発を裏付ける基礎となっておりますので地味ながらも極めて重要な分野であると言えます。
              </p>
              <p>
                暗号通貨の分野では、ブロックチェーンに拘らない合意（コンセンサス）形成手法・支払いチャネル等を用いた効率的な送金方法・台帳を公開しつつもプライバシーを担保する暗号技術などに興味があり、日々調査・研究を重ねております。
              </p>
            </td>
          </tr>
          <tr>
            <th>暗号通貨関連の活動</th>
            <td>
              <ul>
                <li>
                  暗号通貨関連の技術に関する講演。「
                  <ExternalLink href="https://monatr.jp/publications/offlinemeeting20140315/what-is-the-cryptocurrency_20140318.pdf">
                    暗号通貨ってなんだろう？
                  </ExternalLink>
                  」「
                  <ExternalLink href="http://www.slideshare.net/visvirial/ripple201537">
                    暗号通貨・仮想通貨によるギフト券販売サイト『コインギフト』を支える技術
                  </ExternalLink>
                  」「
                  <ExternalLink href="http://www.slideshare.net/visvirial/bitcoinbitcoin20150720">
                    Bitcoinとプライバシー
                  </ExternalLink>
                  」他多数
                </li>
                <li>
                  Bitcoinのいわゆる公式実装「Bitcoin Core」の翻訳活動。バージョン0.10以降のほぼすべての日本語への翻訳を行っている
                </li>
                <li>
                  ブロックエクスプローラ「<ExternalLink href="https://insight.is/">insight</ExternalLink>
                  」の翻訳。insightは米Bitcoin決済大手BitPayが開発を行っており、オープンソースで開発が行われている数少ないブロックエクスプローラの一つ
                </li>
                <li>
                  「<ExternalLink href="http://crypto-users.jp/">日本暗号通貨ユーザ会</ExternalLink>
                  」の設立・運営。同団体は、国内最大級のオープンソース系イベント「オープンソースカンファレンス」に定期的に出展し、技術者に対する認知度向上や情報発信を行っている
                </li>
                <li>その他、オープンソースライブラリのバグ修正、各種OSSの翻訳、コンサルティング等</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

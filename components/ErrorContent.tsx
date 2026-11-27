import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function ErrorContent() {
  return (
    <>
      <PageHeader>エラー</PageHeader>
      <div className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/error_eyecatch.png" alt="エラー画面アイキャッチ画像" className="error-eyecatch" />
      </div>
      <p>誠に申し訳ありませんが、何らかのエラーが発生したためページを表示することができません。</p>
      <p>
        時間を置いてから再度お試しください。それでも改善しない場合には、大変お手数ではありますが、弊社まで
        <Link href="/contact">お問い合わせ</Link>
        いただきますようお願いいたします。
      </p>
      <p className="text-center back-to-top">
        [ <Link href="/">トップページへ</Link> ]
      </p>
    </>
  );
}

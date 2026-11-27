janom.co.jp
===========

合同会社ジャノム公式ウェブサイトのソースコードリポジトリ。

[Next.js](https://nextjs.org/) (App Router) + TypeScript で構築し、静的エクスポート (`output: "export"`) した HTML を GitHub Pages で公開しています。



必要環境
--------

- Node.js 20.9 以上（CI では Node.js 24 を使用）



初期セットアップ
----------------

```
$ npm ci
```



開発
----

```
$ npm run dev
```

http://localhost:3000/ にアクセスすると、現在のリポジトリの内容が表示されます。
ソースコードを変更すると自動的に反映されます。



ビルド
------

```
$ npm run build
```

`out/` ディレクトリに静的サイトが出力されます。
ビルド結果をローカルで確認する場合は、続けて以下を実行し http://localhost:8080/ にアクセスします。

```
$ npm run serve
```

その他のコマンド:

- `npm run lint` — ESLint によるチェック
- `npm run typecheck` — TypeScript の型チェック



ディレクトリ構成
----------------

```
app/          各ページ (App Router)
components/   共通コンポーネント (ヘッダ・フッタ等)
lib/          サイト設定・お知らせ一覧などのデータ
public/       画像・PDF・favicon・CNAME などの静的ファイル
scripts/      ビルド後処理 (旧 URL `*.html` からのリダイレクト生成)
```

お知らせを追加する場合は `lib/news.tsx` の先頭に項目を追加してください。



アップロード（公開）
--------------------

`master` ブランチに新しいコミットがなされると GitHub Actions 上で自動的にビルドが行われ、`gh-pages` ブランチを経由して GitHub Pages で公開されます。

janom-web
=========

合同会社ジャノム公式ウェブサイトのソースコードリポジトリ。



初期セットアップ
----------------

### 環境構築

```
$ npm install
$ npm install --global gulp-cli
```

### 設定ファイル作成

#### AWS認証情報

```
$ cp aws_credentials.example.json aws_credentials.json
$ editor aws_credentials.json
```



デバッグ
--------

```
$ gulp start
```

これで http://localhost:8080/ にアクセスすると、現在のリポジトリの内容が表示されます。
ソースコードが変更されると、自動的にビルド処理が走り内容が更新されます。

ビルドのみ行う場合には

```
$ gulp dist
```

とします。



アップロード（公開）
--------------------

本リポジトリの内容は、Amazon S3 上にアップロードすることで公開されます。

### ステージング環境

```
$ gulp upload-staging
```

これで http://staging.janom.co.jp/ が更新されればOK。

URL は Amazon S3 のウェブサーバに向けられており、S3 のウェブサイトホスティング機能を利用して閲覧することができます。

### 本番環境

```
$ gulp upload-production
```

これで https://janom.co.jp/ が更新されればOK。

URL は CloudFlare のプロキシサーバに向けられており、裏側で S3 へアクセスが飛ぶようになっています。




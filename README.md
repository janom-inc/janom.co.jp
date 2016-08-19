janom-web
=========

[![wercker status](https://app.wercker.com/status/029ccfef3f0b1fafa5923d60e90cd79d/m/ "wercker status")](https://app.wercker.com/project/byKey/029ccfef3f0b1fafa5923d60e90cd79d)

合同会社ジャノム公式ウェブサイトのソースコードリポジトリ。



初期セットアップ
----------------

```
$ npm install
$ npm install --global gulp-cli
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

`master` および `staging` ブランチに新しいコミットがなされると、
Wercker が自動的にビルドを行い Amazon S3 に対してアップロードを行い公開されます。




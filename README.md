janom-web
=========

合同会社ジャノム公式ウェブサイトのソースコードリポジトリ。



初期セットアップ
----------------

```
$ npm ci
```



デバッグ
--------

```
$ npm start
```

これで http://localhost:8080/ にアクセスすると、現在のリポジトリの内容が表示されます。
ソースコードが変更されると、自動的にビルド処理が走り内容が更新されます。

ビルドのみ行う場合には

```
$ npm run build
```

とします。



アップロード（公開）
--------------------

`master` ブランチに新しいコミットがなされると GitHub Actions 上で自動的にビルドが行われ、GitHub Pages を経由してページが公開されます。




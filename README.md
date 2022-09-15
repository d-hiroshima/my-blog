## 技術選定

Next.js
TypeScript
microCMS

ブログのフロントの構築ということでSSG（静的サイト生成）を採用している。
サイトの高速化とSEO対策が目的。


## ローカル環境の構築

パッケージ管理にはnpmを使用している。

1. プロジェクトをgit cloneする。

2. 下記コマンドを実行

```bash
npm run dev
```

3. ローカルにアクセスする。
http://localhost:3000
閲覧することができたら環境の整備は成功。

ディレクトリ構造については公式通りにしているので、
気になることがあれば公式を参考にする。


## デプロイについて
未定。

## APIについて

- usage
https://onlymyblog.microcms.io/api/v1/blogs
ブログ一覧とカテゴリがリターンされる。

- レスポンスの形式

```
{
  "id": "14k1re9hxu",
  "createdAt": "2022-09-04T13:26:49.376Z",
  "updatedAt": "2022-09-13T14:32:50.465Z",
  "publishedAt": "2022-09-04T13:26:49.376Z",
  "revisedAt": "2022-09-13T14:32:50.465Z",
  "title": "ブログを作成するにあたっての技術選定について",
  "content": "<div>sample......<div/>",
  "category": [
    "tech"
  ],
  "tag": [
    "Raect",
    "TypeScript",
    "Next.js"
  ]
}
```
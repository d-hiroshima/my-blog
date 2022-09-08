## 技術選定

Next.js
TypeScript
microCMS
Vercel

ブログのフロントの構築ということでSSG（静的サイト生成）を採用している。
サイトの高速化とSEO対策が目的。


## ローカル環境の構築

この説明はNext.jsのアプリケーションを作成した際のreadmeを流用している。
なおパッケージ管理にはnpmを使用している。

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
Vercelを使用している。

## APIについて

- usage
https://onlymyblog.microcms.io/api/v1/blogs
ブログ一覧とカテゴリがリターンされる。

- レスポンスの形式

```
{
    "contents": [
        {
            "id": "tlejlybdq_c",
            "createdAt": "2022-08-29T17:06:20.256Z",
            "updatedAt": "2022-08-29T17:06:20.256Z",
            "publishedAt": "2022-08-29T17:06:20.256Z",
            "revisedAt": "2022-08-29T17:06:20.256Z",
            "title": "（サンプル）まずはこの記事を開きましょう",
            "content": "<h2 id=\"hdb41525ba7\">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p>",
            "eyecatch": {
                "url": "https://images.microcms-assets.io/assets/9ce3985a8c1548cca2ac3ac282a3fbf2/6c045426d90046d18a3263b98ed54945/blog-template.png",
                "height": 630,
                "width": 1200
            },
            "category": {
                "id": "viwczuw_2u",
                "createdAt": "2022-08-29T17:06:18.134Z",
                "updatedAt": "2022-08-29T17:06:18.134Z",
                "publishedAt": "2022-08-29T17:06:18.134Z",
                "revisedAt": "2022-08-29T17:06:18.134Z",
                "name": "更新情報"
            }
        }
    ],
    "totalCount": 1,
    "offset": 0,
    "limit": 10
}
```
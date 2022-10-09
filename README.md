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
### 概要
当初ブログの公開はNext.jsの開発元でもあるVercel社のVercelを使用するつもりでした。
ですがVercelの無料プランでは商用利用が許可されていないことが発覚。
ゆくゆくは収益化を考えていたので。デプロイ先を再考する必要がありました。
候補ににheroku・AWS・Netlifyなどありましたが、
学習コストとか気軽さ的な障壁を考慮した上でNetlifyを選択しました。

### 反映手順

前提としてGithubのアカウントの登録・Netlifyへのログイン・お名前ドットコムでドメインの取得が
完了していることを前提に解説します。

1. Gitリポジトリを用意する
プロジェクトをmainないしはmasterブランチにプッシュしておく。

2. Netlifyの管理画面でデプロイしたいプロジェクトのGitリポジトリを選択する
Import an existing projectでinport from Gitを選択
手順通りNetlifyのパッケージをインストールする。

3. Import an existing project from a Git repositoryでの設定
オーナーとブランチは任意のもの（mainかmasterにしておくのが好ましい）next build
ビルドコマンドはnext build、パブリッシュディレクトリは.nextにする。
エラーが出ればログを見て対処していく
無事に設定が完了したら[****].netlify.appのように自動でurlが設定される。

4. カスタムドメインの設定
お名前ドットコムで取得したドメインをNetlifyに設定する必要がある。
[Netlify管理画面のOverviewのDomain settings](https://ralacode.com/blog/post/add-onamae-domain-to-netlify/)
こちらの記事が非常に参考になるので、解説は割愛する。

5. SSLの設定
上記の手順を踏まえればすでにSSLが当たっているので何もする必要はない。
ただしSSLはLet's Encriptで発行されたものなので、
発行から90日で手動更新する必要があるので注意が必要。

この手順を踏んだ上でカスタムドメインをブラウザで叩いても表示されない場合は、
DNSのキャッシュが原因の可能性がある。
なのでルーターのキャッシュを削除を試みたほうがいい。
問題の切り分けの手法は、別の回線でカスタムドメインを叩いてみるとかする。

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
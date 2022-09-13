import type { NextPage } from "next";
import Link from "next/link";
import styles from '../../styles/About.module.css'

// components
import HeadContents from "../layouts/HeadContents"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const titleClass: string = "text-5xl font-bold text-left";


/**
 * 説明テキスト↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */
const whatElemmm: string = `
Elemmmは日々の仕事での学びや知見、
プライベートで得た気づきを共有するブログです。
ブログの制作にはフロントエンドではNext.js + tailwind.css、
バックエンドではmicroCMSを採用しています。
`;

const aboutMe: string = `
関西在住、20代（アラサー）、男。
仕事はWebエンジニアに従事。
技術スタックは下記（バージョン・経験年数などは割愛）
・言語
  PHP・JavaScript・TypeScript・Python
・フレームワーク
  Laravel・Symfony・CodeIgniter・jQuery・Raect・Next.js
・DB
  PostgreSQL・SQLite3

趣味はカメラ・音楽鑑賞（ロック・ヒップホップ・エレクトロ・EDM）・ドライブ・ロードバイクでツーリング・ゲーム・パソコンパーツ漁り・飲み歩きなどなど。
`

const howToContact: string = `
contactページにございますメールアドレス・各種媒体・SNSのDMからご連絡いただきますようお願いいたします。
`

/**
 * 説明テキスト↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */



const About: NextPage = () => {

  return (
    <div className={styles.container}>
      <HeadContents />

      <Header />
      <main className={`mx-auto px-8 ${styles.main}`}>
        <div className={styles.grid}>
          <h2 className={titleClass}>Elemmmについて</h2>
          <div className={styles.description}>
            {whatElemmm}

            <Link href="https://nextjs.org/" passHref>
              <a className="link" target="_blank">Next.js by Vercel - The React Fradasdmework</a>
            </Link>
            <br />
            <Link href="https://tailwindcss.com/" passHref>
              <a className="link" target="_blank">Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.</a>
            </Link>
            <br />
            <Link href="https://microcms.io/" passHref>
              <a className="link" target="_blank">microCMS｜APIベースの日本製ヘッドレスCMS</a>
            </Link>
          </div>

          <h2 className={titleClass}>
            運営者について
          </h2>
          <div className={styles.description}>
            {aboutMe}
          </div>

          <h2 className={titleClass}>
            お問い合わせについて
          </h2>
          <div className={styles.description}>
            {howToContact}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}



export default About;
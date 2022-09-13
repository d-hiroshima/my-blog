import type { NextPage } from "next";
import Link from "next/link";
import styles from '../../styles/Contact.module.css'

// components
import HeadContents from "../layouts/HeadContents"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

const titleClass: string = "text-5xl font-bold text-left";


/**
 * 説明テキスト↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */
const contactText: string = `
d.hiroshima777@gmail.comか
各種SNSのDMからご連絡ください。
`;
/**
 * 説明テキスト↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */



const Contact: NextPage = () => {

  return (
    <div className={styles.container}>
      <HeadContents />

      <Header />
      <main className={`mx-auto px-8 ${styles.main}`}>
      <div className={styles.grid}>

        <h2 className={titleClass}>お問い合わせ</h2>
        <div className={styles.description}>
          {contactText}
        </div>
      </div>
      
      </main>
      <Footer />
    </div>
  )
}



export default Contact;
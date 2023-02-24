import type { NextPage } from "next";
import styles from '../../styles/Contact.module.css'
import Sns from "pages/parts/Sns";

const titleClass: string = "text-5xl font-bold text-left";

/**
 * 説明テキスト↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */
const contactText: string = `
各種SNSのDMからご連絡ください。
`;
/**
 * 説明テキスト↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 */

const Contact: NextPage = () => {

  return (
    <div className={styles.container}>
      <main className={`mx-auto px-8 ${styles.main}`}>
        <div className={styles.grid}>
          <h2 className={titleClass}>お問い合わせ</h2>
          <div className={styles.description}>
            {contactText}
          </div>
          <Sns />
        </div>
      </main>
    </div>
  )
}



export default Contact;
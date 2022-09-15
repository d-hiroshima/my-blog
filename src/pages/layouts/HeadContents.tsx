import type { NextPage } from "next"
import Head from "next/head"


const HeadContents = () => {

  /* header 要素の className 属性にある "relative" を "sticky top-0" に変更すると固定ヘッダに変更できる */
  return (
    <Head>
      <title>Elemmm</title>
      <meta name="description" content="Elemmm" />
    </Head>
  )
}

export default HeadContents

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import HeadContents from "./layouts/HeadContents"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadContents />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )

}

export default MyApp

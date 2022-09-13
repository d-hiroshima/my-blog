import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage } from "next";
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Moment from 'react-moment'

import { client } from "../../libs/client";
import { Blog } from "../types/blog";

// components
import HeadContents from "./layouts/HeadContents"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

type Props = {
  blog: Blog[];
};

const Home: NextPage<Props> = ({ blog }: Props) => {
  console.log(blog)
  return (
    <div className={styles.container}>
      <HeadContents />

      <Header />
      <main className={`mx-auto px-8 ${styles.main}`}>

        <h1 className="text-6xl font-bold text-center">
          Welcome to <span className={styles.mainTitle}>Elemmm</span>.
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          {/*
            レイアウトについてのカスタム
            グリッドの個数を変更する場合はgrid-cols-{number}を変更する。
            記事リストを一列にするにはclassのgridを削除する。
          */}
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

              {blog.map((item) => (
                <Link href={`./blog/${item.id}`} key={item.id}> 
                  <div className="rounded overflow-hidden shadow-lg link-content">
                    {/* <img className="w-full" src="/mountain.jpg" alt="Mountain"/> */}
                    <div className="px-6 py-4">
                      <div className="my-2">
                        <Moment format="YYYY.MM.DD HH:mm">
                          {item.publishedAt}
                        </Moment>
                      </div>
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {
                        item.tag.length > 0 ? (
                          item.tag.map((value, key) => <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value}</span>)
                        ) : (
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#notag</span>
                        )
                      }
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </main>

      <Footer />
    </div>
  )
}


export const getStaticProps = async () => {
  const data = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blogs",
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};


export default Home;
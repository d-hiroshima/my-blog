import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage, GetStaticProps } from "next";
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Moment from 'react-moment'

import { client } from "../../libs/client";
import { Blog } from "../types/blog";


type Props = {
  blog: Blog[];
};

const Home: NextPage<Props> = ({ blog }: Props) => {
  return (
    <div className={styles.container}>
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
            <div className="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

              {blog.map((item, key) => {
                if (key > 10) return false; 
                return (
                  <Link href={`./blog/${item.id}`} key={item.id}> 
                    <a>
                      <div className="rounded border-solid border-opacity-75 overflow-hidden shadow-xl link-content">
                        {/* <img className="w-full" src="/mountain.jpg" alt="Mountain"/> */}
                        <div className="px-6 py-4">
                          <div className="my-2">
                            <Moment format="YYYY.MM.DD">
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
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="my-4">
            <button 
              className="text-sky-500 background-transparent font-bold uppercase mx-8 my-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <Link href={`./blog`}> 
                <a>記事をもっと見る →</a>
              </Link>
            </button>
          </div>
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
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
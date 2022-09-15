import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import styles from '../../styles/Blog.module.css'
import Moment from 'react-moment'

import { client } from "../../../libs/client";
import { Blog } from "../../types/blog";

// components
import HeadContents from "./../layouts/HeadContents"
import Header from "./../layouts/Header"
import Footer from "./../layouts/Footer"

type Props = {
  blog: Blog[];
};

const Blogs: NextPage<Props> = ({ blog }: Props) => {
  return (
    <div className={styles.container}>
      <HeadContents />

      <Header />
      <main className={`mx-auto px-8 ${styles.main}`}>

        <p className={`${styles.description} font-bold`}>Blog</p>

        <div className={styles.grid}>
          {/*
            レイアウトについてのカスタム
            グリッドの個数を変更する場合はgrid-cols-{number}を変更する。
            記事リストを一列にするにはclassのgridを削除する。
          */}
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

              {blog.map((item) => (
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
              ))}
            </div>
          </div>
      </main>

      <Footer />
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


export default Blogs;
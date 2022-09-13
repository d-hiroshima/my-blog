import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage } from "next";
import Image from 'next/image'
import Link from "next/link";
import styles from '../../styles/Home.module.css'
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

const Blog: NextPage<Props> = ({ blog }: Props) => {
  console.log(blog)
  return (
    <div className={styles.container}>
      <HeadContents />

      <Header />
      <main className={`mx-auto px-8 ${styles.main}`}>

        <p className={styles.description}></p>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>

      <Footer />
    </div>
  )
}


// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blogs",
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
export default Blog;
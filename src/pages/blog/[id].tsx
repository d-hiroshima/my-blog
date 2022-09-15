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
  blog: Blog;
};

const Blog: NextPage<Props> = ({ blog }: Props) => {
  console.log(blog)
  return (
    <div className={styles.container}>
      <HeadContents />

      <Header />
      <main className={`mx-auto px-8 ${styles.blog_main}`}>

        <h1 className="text-4xl text-center">{blog.title}</h1>
        <p className="my-8">
          投稿日 <Moment format="YYYY.MM.DD">{blog.publishedAt}</Moment>&nbsp;&nbsp;更新日 <Moment format="YYYY.MM.DD">{blog.updatedAt}</Moment>
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
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
export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
export default Blog;
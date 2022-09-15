import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from 'node:querystring'
import Link from "next/link";
import styles from '../../styles/Blog.module.css'
import Moment from 'react-moment'

import { client } from "../../../libs/client";
import { Blog } from "../../types/blog";

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = {
  blog: Blog;
};

const Blog: NextPage<Props> = ({ blog }: Props) => {
  
  return (
    <div className={styles.container}>
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
    </div>
  )
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blogs",
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default Blog;
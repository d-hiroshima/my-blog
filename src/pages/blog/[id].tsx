import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from 'node:querystring';
import Link from "next/link";
import styles from '../../styles/Blog.module.css';

// npm package
import Moment from 'react-moment'
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

import { client } from "../../../libs/client";
import { Blog } from "../../types/blog";

interface Params extends ParsedUrlQuery {
  id: string
}

type Props = {
  blog: Blog;
  highlightedContent: string;
};

const Blog: NextPage<Props> = ({ blog, highlightedContent }: Props) => {
  
  return (
    <div className={styles.container}>
      <main className={`mx-auto px-8 ${styles.blog_main}`}>

        <h1 className="text-2xl text-center">{blog.title}</h1>
        <p className="my-8">
          投稿日 <Moment format="YYYY.MM.DD">{blog.publishedAt}</Moment>&nbsp;&nbsp;更新日 <Moment format="YYYY.MM.DD">{blog.updatedAt}</Moment>
        </p>
        <div
          className="article"
          dangerouslySetInnerHTML={{
            __html: `${highlightedContent}`,
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

  const $ = cheerio.load(data.content)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: data,
      highlightedContent: $.html(),
    },
  };
};

export default Blog;
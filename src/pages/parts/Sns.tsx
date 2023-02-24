import { MicroCMSListResponse } from "microcms-js-sdk";
import type { NextPage, GetStaticProps } from "next";
import Image from 'next/image'
import Link from "next/link";
import Media from '../../../public/media.json'

// // 外部サービスのオブジェクト
// const snsMedia: MediaAccount[] = Media;

const Sns = () => {
  // メディア情報のjsonを配列に変換
  const mediaArray = Object.entries(Media);

  return (
    <>
      <div className="">
        <ul className="space-x-10 my-3">
          {mediaArray.map((item, key: number) => {
            return (
              <li key={key} className="inline-block hover:text-gray-300">
                <Link href={`${item[1].url}`}>
                  <a target="_blank">
                    <img src={item[1].img} width="35" height="35" />
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sns;
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
                    <Image loading="lazy" decoding="async" width={35} height={35} src={item[1].img} alt={item[1].name} />
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
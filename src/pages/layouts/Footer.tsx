
import type { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../../styles/Home.module.css'

import { Nav } from "../../types/blog";
import { ServiceAccount } from "../../types/base";

// ナビ変数
const nav: Nav[] = [
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Blog",
    href: "/blog"
  },
  {
    title: "Contact",
    href: "/contact"
  },
]

// 外部サービス変数
const serviceAccount: ServiceAccount[] = [
	{
		name: "github",
		url: "/",
		icon: ""
	},
	{
		name: "qiita",
		url: "/",
		icon: ""
	},
]



const Footer = () => {
  return(
    <footer className={styles.footer}>
			<nav
				className="text-center"
			>
				©2022 Elemmm
				<ul className="text-sm text-gray-700 list-none p-0 flex items-center">
					{ nav.map((item: Nav, key: number) => (
						<li key={key} className="inline-block py-2 px-3 text-black hover:text-gray-300">
							<Link href={item.href}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
    </footer>
  )
}

export default Footer
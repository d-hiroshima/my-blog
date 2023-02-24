import type { NextPage } from "next";
import Link from "next/link"
import styles from '../../styles/Home.module.css'

// Components
import Sns from '../parts/Sns'
import { Nav } from "../../types/blog";

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

const Footer = () => {
  return(
    <footer className={styles.footer}>
			<nav
				className="text-center text-base"
			>
				©2022 Elemmm
				<ul className="text-gray-700 list-none mb-3 flex justify-center">
					{ nav.map((item: Nav, key: number) => (
						<li key={key} className="inline-block py-2 px-3 text-black hover:text-gray-300">
							<Link href={`${item.href}`}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<Sns />
			</nav>
    </footer>
  )
}

export default Footer
import type { NextPage } from "next"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Home.module.css"

import { Nav } from "../../types/blog";

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

const Header = () => {

  /* header 要素の className 属性にある "relative" を "sticky top-0" に変更すると固定ヘッダになります */
  return (
    <header className='relative z-10 bg-white ring-1 ring-gray-900 ring-opacity-20 shadow-sm'>
			<nav
				className="font-sans text-center flex justify-between mx-auto container overflow-hidden h-14"
			>
				<a
					href="./"
					className="block text-left text-black w-full h-full text-4xl font-bold flex items-center"
				>
					Elemmm
				</a>
				<ul className="text-sm text-gray-700 list-none p-0 flex items-center">
					{ nav.map((item: Nav, key: number) => (
						<li key={key} className="inline-block py-2 px-3 text-black hover:text-gray-700 no-underline">
							<Link href={item.href}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
    </header>
  )
}

export default Header

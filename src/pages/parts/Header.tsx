import type { NextPage } from "next"
import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Home.module.css"

type Nav = {
  title: string;
  href?: string;
}

const nav: Nav[] = [
  {
    title: "About",
    href: "#"
  },
  {
    title: "Profile",
    href: "#"
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = (): void => setIsOpen(!isOpen)

  /* header 要素の className 属性にある "relative" を "sticky top-0" に変更すると固定ヘッダになります */
  return (
    <header className='relative z-10 bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm'>
			<nav
				className="font-sans text-center flex justify-between my-4 mx-auto container overflow-hidden"
			>
				<a
					href="/"
					className="block text-left"
				>
					Elemmm</a>
				<ul className="text-sm text-gray-700 list-none p-0 flex items-center">
					<li>
						<a
							href="#"
							className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
							>Products</a>
					</li>
					<li>
						<a
							href="#"
							className="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
						>Pricing</a>
					</li>

				</ul>
			</nav>
    </header>
  )
}

export default Header

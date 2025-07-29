'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <Link href="/" className="flex items-center text-white hover:text-white no-underline">
            <div className="w-12 h-12 bg-white text-bitcoin-orange rounded-full flex items-center justify-center font-bold mr-3 text-xl">
              ₿
            </div>
            <span className="text-xl font-bold">bitebi.info</span>
          </Link>
          
          <button
            className="lg:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
          
          <nav className={`${isMobileMenuOpen ? 'absolute top-full left-0 w-full bg-gradient-to-r from-bitcoin-orange to-bitcoin-light shadow-lg lg:static lg:w-auto lg:bg-transparent lg:shadow-none' : ''}`}>
            <ul className={`flex gap-8 ${isMobileMenuOpen ? 'flex-col p-4 lg:flex-row lg:p-0' : 'hidden lg:flex'}`}>
              <li>
                <Link href="/" className="text-white hover:opacity-80 transition-opacity py-3 px-2 block lg:inline lg:py-2 lg:px-1" onClick={() => setIsMobileMenuOpen(false)}>
                  首页
                </Link>
              </li>
              <li>
                <Link href="/buy-bitcoin" className="text-white hover:opacity-80 transition-opacity py-3 px-2 block lg:inline lg:py-2 lg:px-1" onClick={() => setIsMobileMenuOpen(false)}>
                  购买比特币
                </Link>
              </li>
              <li>
                <Link href="/what-is-bitcoin" className="text-white hover:opacity-80 transition-opacity py-3 px-2 block lg:inline lg:py-2 lg:px-1" onClick={() => setIsMobileMenuOpen(false)}>
                  比特币是什么
                </Link>
              </li>
              <li>
                <Link href="/bitcoin-price" className="text-white hover:opacity-80 transition-opacity py-3 px-2 block lg:inline lg:py-2 lg:px-1" onClick={() => setIsMobileMenuOpen(false)}>
                  比特币价格
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:opacity-80 transition-opacity py-3 px-2 block lg:inline lg:py-2 lg:px-1" onClick={() => setIsMobileMenuOpen(false)}>
                  博客
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 sm:py-16 overflow-hidden">
      {/* 背景纹理和装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7931a%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* 装饰性渐变球 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-bitcoin-orange rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-bitcoin-light rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="footer-section">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-2xl flex items-center justify-center font-bold mr-4 shadow-lg text-2xl">
                ₿
              </div>
              <div>
                <span className="text-2xl font-bold text-white block">bitebi.info</span>
                <span className="text-sm text-bitcoin-orange">专业比特币信息平台</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed max-w-sm">
              专业比特币信息服务平台，汇聚全球主要交易所数据，提供实时行情、深度分析、投资教育于一体的综合服务。
            </p>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-white/10">
                <span className="block text-xl sm:text-2xl font-bold text-bitcoin-orange">500万+</span>
                <span className="block text-xs text-gray-400 mt-1">用户信赖</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-white/10">
                <span className="block text-xl sm:text-2xl font-bold text-bitcoin-orange">99.9%</span>
                <span className="block text-xs text-gray-400 mt-1">数据准确</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-bitcoin-orange rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg">比特币知识</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/what-is-bitcoin" className="text-gray-300 hover:text-bitcoin-orange transition-all text-xs sm:text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币是什么
                  </Link>
                </li>
                <li>
                  <Link href="/#bitcoin-features" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币的特点
                  </Link>
                </li>
                <li>
                  <Link href="/buy-bitcoin" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币怎么买
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币资讯
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-bitcoin-orange rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg">市场行情</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/bitcoin-price" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币价格
                  </Link>
                </li>
                <li>
                  <Link href="/bitcoin-price#bitcoin-trends" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币走势
                  </Link>
                </li>
                <li>
                  <Link href="/bitcoin-price#bitcoin-market" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    比特币行情
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-bitcoin-orange rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg">关于我们</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    网站声明
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    隐私条款
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-gray-300 hover:text-bitcoin-orange transition-all text-sm flex items-center group">
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    网站地图
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* 底部版权信息 */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 pb-0">
          <div className="text-center px-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; 2025 <span className="text-bitcoin-orange font-medium">www.bitebi.info</span> 版权所有 | 专业比特币信息服务平台
            </p>
            <p className="text-gray-500 text-xs mt-1 mb-0">
              本站提供的信息仅供参考，不构成投资建议 | 投资有风险，入市需谨慎
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
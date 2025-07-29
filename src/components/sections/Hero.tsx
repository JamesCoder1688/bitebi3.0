import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20 text-center">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 fade-in px-4">
          专业比特币信息服务平台
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 max-w-4xl mx-auto fade-in px-4">
          提供实时比特币价格行情、深度市场分析、专业投资教育指导。帮助您选择最适合的交易所平台，做出明智的投资决策。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in">
          <Link href="/buy-bitcoin" className="btn btn-primary">
            立即购买比特币
          </Link>
          <Link href="/bitcoin-price" className="btn btn-secondary">
            查看实时价格
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 fade-in px-4">
          <div className="hero-stat">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bitcoin-orange mb-1 sm:mb-2">实时</h3>
            <p className="opacity-80 text-sm sm:text-base">价格数据更新</p>
          </div>
          <div className="hero-stat">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bitcoin-orange mb-1 sm:mb-2">全球</h3>
            <p className="opacity-80 text-sm sm:text-base">主要交易所覆盖</p>
          </div>
          <div className="hero-stat">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bitcoin-orange mb-1 sm:mb-2">24/7</h3>
            <p className="opacity-80 text-sm sm:text-base">信息服务</p>
          </div>
          <div className="hero-stat">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bitcoin-orange mb-1 sm:mb-2">专业</h3>
            <p className="opacity-80 text-sm sm:text-base">市场分析团队</p>
          </div>
        </div>
        
        {/* 快速导航链接 */}
        <div className="mt-12 fade-in">
          <div className="text-sm opacity-80 mb-4">快速导航</div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/what-is-bitcoin" className="text-bitcoin-light hover:text-white transition-colors">
              比特币是什么
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/blog" className="text-bitcoin-light hover:text-white transition-colors">
              最新资讯
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/bitcoin-price" className="text-bitcoin-light hover:text-white transition-colors">
              价格分析
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/buy-bitcoin" className="text-bitcoin-light hover:text-white transition-colors">
              购买指南
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
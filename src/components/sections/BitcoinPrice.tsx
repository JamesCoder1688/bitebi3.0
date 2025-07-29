'use client'

import { useBitcoinPrice } from '@/hooks/useBitcoinPrice'
import { formatPrice, formatChangePercent, getPriceChangeColor } from '@/lib/bitcoin-price'

export default function BitcoinPrice() {
  const { data, loading, error, lastUpdated, refresh } = useBitcoinPrice({
    updateInterval: 30000, // 30秒更新一次
    autoUpdate: true
  })

  // 加载状态
  if (loading) {
    return (
      <section className="responsive-spacing bg-white">
        <div className="container">
          <h2 className="responsive-title text-center mb-8 sm:mb-12 text-gray-900">比特币价格</h2>
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 shadow-xl text-center">
            <div className="animate-pulse">
              <div className="h-12 sm:h-16 bg-gray-300 rounded mb-4 mx-auto w-48 sm:w-64"></div>
              <div className="h-6 sm:h-8 bg-gray-300 rounded mb-4 mx-auto w-36 sm:w-48"></div>
              <div className="h-3 sm:h-4 bg-gray-300 rounded mx-auto w-56 sm:w-72"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // 错误状态
  if (error || !data) {
    return (
      <section className="responsive-spacing bg-white">
        <div className="container">
          <h2 className="responsive-title text-center mb-8 sm:mb-12 text-gray-900">比特币价格</h2>
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 shadow-xl text-center">
            <div className="text-red-600 mb-4">
              <p className="text-lg sm:text-xl mb-4">{error || '无法获取价格数据'}</p>
              <button
                onClick={refresh}
                className="px-6 py-3 bg-bitcoin-orange text-white rounded-lg hover:bg-bitcoin-dark transition-colors"
              >
                重新加载
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="responsive-spacing bg-white">
      <div className="container">
        <h2 className="responsive-title text-center mb-8 sm:mb-12 text-gray-900">比特币价格</h2>
        
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12 shadow-xl text-center relative">
          {/* 实时指示器和数据源 */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-1 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="hidden sm:inline">实时数据</span>
              <span className="sm:hidden">实时</span>
            </div>
            <div className="text-xs hidden sm:block">
              数据源: {data.source}
            </div>
          </div>
          
          <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-bitcoin-orange mb-3 sm:mb-4">
            ${data.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 ${getPriceChangeColor(data.usd_24h_change)}`}>
            {formatChangePercent(data.usd_24h_change)}
          </div>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            <span className="block sm:inline">24小时价格变化</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">数据更新时间：</span>
            <span className="font-medium block sm:inline">
              {lastUpdated?.toLocaleString('zh-CN')}
            </span>
          </p>
          
          {/* 手动刷新按钮 */}
          <button
            onClick={refresh}
            className="mt-4 text-sm text-bitcoin-orange hover:text-bitcoin-dark transition-colors flex items-center gap-1 mx-auto"
            title="手动刷新价格"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            刷新价格
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-gray-900 mb-4 text-xl font-semibold">比特币今日价格行情</h3>
            <div className="text-3xl font-bold text-bitcoin-orange mb-2">
              {formatPrice(data.cny, 'CNY')}
            </div>
            <p className="text-gray-600 text-sm">人民币实时汇率</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-gray-900 mb-4 text-xl font-semibold">比特币最新价格</h3>
            <div className="text-3xl font-bold text-bitcoin-orange mb-2">
              {formatPrice(data.usd, 'USD')}
            </div>
            <p className="text-gray-600 text-sm">美元实时价格</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-gray-900 mb-4 text-xl font-semibold">比特币美元</h3>
            <div className="text-3xl font-bold text-bitcoin-orange mb-2">BTC/USD</div>
            <p className="text-gray-600 text-sm">主流交易对</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-gray-900 mb-4 text-xl font-semibold">24小时涨跌</h3>
            <div className={`text-3xl font-bold mb-2 ${getPriceChangeColor(data.cny_24h_change)}`}>
              {formatChangePercent(data.cny_24h_change)}
            </div>
            <p className="text-gray-600 text-sm">人民币24小时变化</p>
          </div>
        </div>
      </div>
    </section>
  )
}
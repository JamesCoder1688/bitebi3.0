'use client'

import { useState, useEffect } from 'react'
import { fetchBitcoinPrice, formatPrice, formatChangePercent, getPriceChangeColor, type BitcoinPriceData } from '@/lib/bitcoin-price'

interface RealTimePriceDisplayProps {
  className?: string
  showCNY?: boolean
  updateInterval?: number // 更新间隔，单位：毫秒
}

export default function RealTimePriceDisplay({ 
  className = '', 
  showCNY = true,
  updateInterval = 30000 // 默认30秒更新一次
}: RealTimePriceDisplayProps) {
  const [priceData, setPriceData] = useState<BitcoinPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // 获取价格数据
  const updatePrice = async () => {
    try {
      setError(null)
      const data = await fetchBitcoinPrice()
      setPriceData(data)
      setLastUpdated(new Date())
      setLoading(false)
    } catch (err) {
      setError('获取价格失败')
      setLoading(false)
      console.error('Price update failed:', err)
    }
  }

  // 初始化和定时更新
  useEffect(() => {
    updatePrice()
    
    const interval = setInterval(updatePrice, updateInterval)
    
    return () => clearInterval(interval)
  }, [updateInterval])

  // 加载状态
  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-16 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      </div>
    )
  }

  // 错误状态
  if (error || !priceData) {
    return (
      <div className={`text-red-500 ${className}`}>
        <p>{error || '价格数据不可用'}</p>
        <button 
          onClick={updatePrice}
          className="mt-2 px-4 py-2 bg-bitcoin-orange text-white rounded hover:bg-bitcoin-dark transition-colors"
        >
          重试
        </button>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* USD价格 */}
      <div className="mb-4">
        <div className="text-4xl font-bold text-bitcoin-orange mb-2">
          {formatPrice(priceData.usd, 'USD')}
        </div>
        <div className={`text-lg font-medium ${getPriceChangeColor(priceData.usd_24h_change)}`}>
          {formatChangePercent(priceData.usd_24h_change)} 
          <span className="text-sm text-gray-500 ml-2">24小时</span>
        </div>
      </div>

      {/* CNY价格 */}
      {showCNY && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {formatPrice(priceData.cny, 'CNY')}
          </div>
          <div className={`text-sm ${getPriceChangeColor(priceData.cny_24h_change)}`}>
            {formatChangePercent(priceData.cny_24h_change)} (人民币)
          </div>
        </div>
      )}

      {/* 更新时间 */}
      <div className="text-xs text-gray-500 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        最后更新: {lastUpdated?.toLocaleTimeString('zh-CN')}
      </div>

      {/* 手动刷新按钮 */}
      <button
        onClick={updatePrice}
        className="mt-3 text-sm text-bitcoin-orange hover:text-bitcoin-dark transition-colors flex items-center gap-1"
        title="手动刷新价格"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        刷新
      </button>
    </div>
  )
}
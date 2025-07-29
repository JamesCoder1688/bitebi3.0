'use client'

import type { Metadata } from 'next'
import { useState, useEffect, useRef, Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useBitcoinPrice } from '@/hooks/useBitcoinPrice'
import { useBitcoinHistory } from '@/hooks/useBitcoinHistory'
import { formatPrice, formatChangePercent, getPriceChangeColor, type TimePeriod, type HistoricalPricePoint } from '@/lib/bitcoin-price'

// 懒加载价格显示组件
const RealTimePriceDisplay = dynamic(() => import('@/components/bitcoin/RealTimePriceDisplay'), {
  loading: () => <div className="h-20 bg-white/20 animate-pulse rounded-lg"></div>
})

const metadata: Metadata = {
  title: '比特币价格 - BTC实时行情 - 比特币今日价格走势 | bitebi.info',
  description: '实时比特币价格行情，BTC/USD、BTC/CNY汇率查询。提供比特币历史价格走势图、技术分析指标，专业的数字货币价格追踪平台。',
  keywords: '比特币价格,BTC价格,比特币行情,比特币实时价格,比特币走势图,数字货币价格',
  alternates: {
    canonical: 'https://www.bitebi.info/bitcoin-price',
  },
}

export default function BitcoinPrice() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('7d')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // 获取实时价格数据
  const { data: priceData, loading: priceLoading, error: priceError } = useBitcoinPrice({
    updateInterval: 30000,
    autoUpdate: true
  })
  
  // 获取历史数据
  const { data: historyData, loading: historyLoading, error: historyError, changePeriod } = useBitcoinHistory({
    initialPeriod: selectedPeriod,
    autoUpdate: true,
    updateInterval: 300000
  })

  // 绘制图表函数
  const drawChart = (prices: HistoricalPricePoint[]) => {
    const canvas = canvasRef.current
    if (!canvas || !prices.length) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    const padding = 40

    ctx.clearRect(0, 0, width, height)

    // 计算价格范围
    const priceValues = prices.map(p => p.price)
    const minPrice = Math.min(...priceValues)
    const maxPrice = Math.max(...priceValues)
    const priceRange = maxPrice - minPrice

    // 绘制网格
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 1

    // 水平网格线
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height - padding * 2) * (i / 5)
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // 垂直网格线
    for (let i = 0; i <= 6; i++) {
      const x = padding + (width - padding * 2) * (i / 6)
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)
      ctx.stroke()
    }

    // 绘制价格标签
    ctx.fillStyle = '#6b7280'
    ctx.font = '11px Arial'
    ctx.textAlign = 'right'

    for (let i = 0; i <= 5; i++) {
      const price = maxPrice - (priceRange * i / 5)
      const y = padding + (height - padding * 2) * (i / 5)
      const priceText = price > 1000 ? `$${(price / 1000).toFixed(1)}K` : `$${price.toFixed(0)}`
      ctx.fillText(priceText, padding - 5, y + 4)
    }

    // 绘制时间标签
    ctx.textAlign = 'center'
    const timeLabels = getTimeLabels(selectedPeriod)
    timeLabels.forEach((label, index) => {
      const x = padding + (width - padding * 2) * (index / (timeLabels.length - 1))
      ctx.fillText(label, x, height - padding + 15)
    })

    // 绘制价格线
    if (priceRange > 0) {
      ctx.strokeStyle = '#f7931a'
      ctx.lineWidth = 2
      ctx.beginPath()

      prices.forEach((point, index) => {
        const x = padding + (width - padding * 2) * (index / (prices.length - 1))
        const y = padding + (height - padding * 2) * (1 - (point.price - minPrice) / priceRange)

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // 添加渐变填充
      ctx.globalAlpha = 0.1
      ctx.fillStyle = '#f7931a'
      ctx.lineTo(width - padding, height - padding)
      ctx.lineTo(padding, height - padding)
      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1

      // 绘制最后一个点
      const lastPoint = prices[prices.length - 1]
      const lastX = width - padding
      const lastY = padding + (height - padding * 2) * (1 - (lastPoint.price - minPrice) / priceRange)
      
      ctx.fillStyle = '#f7931a'
      ctx.beginPath()
      ctx.arc(lastX, lastY, 4, 0, 2 * Math.PI)
      ctx.fill()
    }
  }

  // 获取时间标签
  const getTimeLabels = (period: TimePeriod): string[] => {
    const labels = {
      '1h': ['1h前', '45m', '30m', '15m', '现在'],
      '24h': ['24h前', '18h', '12h', '6h', '现在'],
      '7d': ['7天前', '5天', '3天', '1天', '现在'],
      '30d': ['30天前', '22天', '15天', '7天', '现在'],
      '1y': ['1年前', '9个月', '6个月', '3个月', '现在']
    }
    return labels[period] || ['开始', '现在']
  }
  
  // 切换时间周期
  const handlePeriodChange = async (period: TimePeriod) => {
    setSelectedPeriod(period)
    await changePeriod(period)
  }

  // 重绘图表
  useEffect(() => {
    if (historyData?.prices) {
      drawChart(historyData.prices)
    }
  }, [historyData, selectedPeriod])

  // 处理窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      if (historyData?.prices) {
        setTimeout(() => drawChart(historyData.prices), 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [historyData])

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            比特币价格行情
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            实时追踪比特币价格走势，提供专业的技术分析和市场洞察
          </p>
          
          {/* 实时价格显示 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            {priceLoading ? (
              <div className="animate-pulse text-center">
                <div className="h-8 bg-white/20 rounded mb-4 mx-auto w-48"></div>
                <div className="h-16 bg-white/20 rounded mb-4 mx-auto w-64"></div>
                <div className="h-8 bg-white/20 rounded mx-auto w-32"></div>
              </div>
            ) : priceError || !priceData ? (
              <div className="text-center text-red-300">
                <p className="mb-4">{priceError || '无法获取价格数据'}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
                <div>
                  <div className="text-lg font-semibold mb-2 opacity-80">当前价格 (USD)</div>
                  <div className="text-4xl lg:text-5xl font-bold">
                    {formatPrice(priceData.usd, 'USD')}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-2 opacity-80">24小时变化</div>
                  <div className={`text-2xl lg:text-3xl font-bold ${
                    priceData.usd_24h_change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {formatChangePercent(priceData.usd_24h_change)}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-2 opacity-80">价格 (CNY)</div>
                  <div className="text-2xl lg:text-3xl font-bold text-bitcoin-light">
                    {formatPrice(priceData.cny, 'CNY')}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 详细价格信息 */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            比特币市场数据
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priceData ? (
              <>
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">比特币价格 (USD)</h3>
                  <div className="text-3xl font-bold text-bitcoin-orange mb-2">
                    {formatPrice(priceData.usd, 'USD')}
                  </div>
                  <p className="text-gray-600 text-sm">美元实时价格</p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">比特币价格 (CNY)</h3>
                  <div className="text-3xl font-bold text-bitcoin-orange mb-2">
                    {formatPrice(priceData.cny, 'CNY')}
                  </div>
                  <p className="text-gray-600 text-sm">人民币实时汇率</p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">24小时变化</h3>
                  <div className={`text-3xl font-bold mb-2 ${getPriceChangeColor(priceData.usd_24h_change)}`}>
                    {formatChangePercent(priceData.usd_24h_change)}
                  </div>
                  <p className="text-gray-600 text-sm">24小时价格变化</p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">数据源</h3>
                  <div className="text-xl font-bold text-bitcoin-orange mb-2">
                    {priceData.source}
                  </div>
                  <p className="text-gray-600 text-sm">实时数据提供</p>
                </div>
              </>
            ) : (
              // 加载状态占位符
              <>
                {[1,2,3,4].map(i => (
                  <div key={i} className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-300 rounded mb-4 mx-auto w-32"></div>
                      <div className="h-8 bg-gray-300 rounded mb-2 mx-auto w-24"></div>
                      <div className="h-3 bg-gray-300 rounded mx-auto w-20"></div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* 价格走势图表 */}
      <section id="bitcoin-trends" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            比特币价格走势图
          </h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
              <div className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
                BTC/USD 价格图表
              </div>
              <div className="flex gap-2 flex-wrap">
                {(['1h', '24h', '7d', '30d', '1y'] as TimePeriod[]).map((period) => (
                  <button
                    key={period}
                    onClick={() => handlePeriodChange(period)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPeriod === period
                        ? 'bg-bitcoin-orange text-white'
                        : 'border border-gray-300 hover:border-bitcoin-orange'
                    }`}
                    disabled={historyLoading}
                  >
                    {period === '1h' ? '1小时' : 
                     period === '24h' ? '24小时' : 
                     period === '7d' ? '7天' : 
                     period === '30d' ? '30天' : '1年'}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-96 border border-gray-200 rounded-xl relative">
              {historyLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse text-center">
                    <div className="h-6 bg-gray-300 rounded mb-4 w-48 mx-auto"></div>
                    <div className="text-gray-500">加载中...</div>
                  </div>
                </div>
              ) : historyError ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500">
                  <div className="text-center">
                    <p className="mb-2">{historyError}</p>
                    <button 
                      onClick={() => handlePeriodChange(selectedPeriod)}
                      className="px-4 py-2 bg-bitcoin-orange text-white rounded-lg hover:bg-bitcoin-dark transition-colors"
                    >
                      重试
                    </button>
                  </div>
                </div>
              ) : (
                <canvas
                  ref={canvasRef}
                  className="w-full h-full rounded-xl"
                />
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">期间最高</div>
                <div className="text-xl font-bold text-green-500">
                  ${(() => {
                    if (!historyData?.prices?.length) return priceData ? (priceData.usd * 1.15).toFixed(2) : '--'
                    const periodHigh = Math.max(...historyData.prices.map(p => p.price))
                    return periodHigh.toFixed(2)
                  })()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">期间最低</div>
                <div className="text-xl font-bold text-red-500">
                  ${(() => {
                    if (!historyData?.prices?.length) return priceData ? (priceData.usd * 0.85).toFixed(2) : '--'
                    const periodLow = Math.min(...historyData.prices.map(p => p.price))
                    return periodLow.toFixed(2)
                  })()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">平均价格</div>
                <div className="text-xl font-bold text-bitcoin-orange">
                  ${(() => {
                    if (!historyData?.prices?.length) return priceData ? priceData.usd.toFixed(2) : '--'
                    const average = historyData.prices.reduce((sum, p) => sum + p.price, 0) / historyData.prices.length
                    return average.toFixed(2)
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 市场统计 */}
      <section id="bitcoin-market" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            市场统计数据
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">市值排名</h3>
              <div className="text-3xl font-bold text-bitcoin-orange mb-2">#1</div>
              <p className="text-gray-600">全球加密货币市值排名第一</p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">总市值</h3>
              <div className="text-3xl font-bold text-bitcoin-orange mb-2">
                {priceData ? 
                  `$${((priceData.usd * 19800000) / 1000000000000).toFixed(2)}T` : 
                  '$1.35T'
                }
              </div>
              <p className="text-gray-600">比特币总市值（万亿美元）</p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24小时交易量</h3>
              <div className="text-3xl font-bold text-bitcoin-orange mb-2">$28.4B</div>
              <p className="text-gray-600">全球24小时交易总量</p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">流通供应量</h3>
              <div className="text-3xl font-bold text-bitcoin-orange mb-2">19.8M</div>
              <p className="text-gray-600">当前流通中的比特币数量</p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">总供应量</h3>
              <div className="text-3xl font-bold text-bitcoin-orange mb-2">21M</div>
              <p className="text-gray-600">比特币最大供应量上限</p>
            </div>
            
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">恐慌贪婪指数</h3>
              <div className={`text-3xl font-bold mb-2 ${(() => {
                if (!priceData) return 'text-gray-500'
                const change = priceData.usd_24h_change
                if (change > 5) return 'text-green-600'
                if (change > 0) return 'text-green-500'
                if (change > -5) return 'text-yellow-500'
                return 'text-red-500'
              })()}`}>
                {(() => {
                  if (!priceData) return '50'
                  const change = priceData.usd_24h_change
                  // 基于24小时变化计算简化的恐慌贪婪指数
                  const baseIndex = 50
                  const adjustedIndex = Math.max(0, Math.min(100, baseIndex + (change * 3)))
                  return Math.round(adjustedIndex)
                })()}
              </div>
              <p className="text-gray-600">
                当前市场情绪：{(() => {
                  if (!priceData) return '中性'
                  const change = priceData.usd_24h_change
                  if (change > 8) return '极度贪婪'
                  if (change > 3) return '贪婪'
                  if (change > -3) return '中性'
                  if (change > -8) return '恐惧'
                  return '极度恐惧'
                })()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 价格分析 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            价格分析与预测
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">技术分析</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">RSI (14)</span>
                  <span className="font-bold text-green-500">65.2 (买入)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">MACD</span>
                  <span className="font-bold text-green-500">+458 (看涨)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">移动平均线 (50)</span>
                  <span className="font-bold text-green-500">$65,234 (上涨)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">移动平均线 (200)</span>
                  <span className="font-bold text-bitcoin-orange">$62,891 (中性)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">布林带</span>
                  <span className="font-bold text-green-500">突破上轨</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">市场观点</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-bold text-green-700">看涨观点 (65%)</div>
                  <p className="text-gray-600 text-sm">机构持续买入，技术面向好，宏观环境支持数字资产</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="font-bold text-yellow-700">中性观点 (25%)</div>
                  <p className="text-gray-600 text-sm">价格在关键阻力位附近，需要更多催化剂推动突破</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-bold text-red-700">看跌观点 (10%)</div>
                  <p className="text-gray-600 text-sm">短期获利回吐压力，监管不确定性可能带来波动</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            抓住比特币投资机会
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            基于当前价格分析，现在可能是投资比特币的好时机
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/buy-bitcoin" className="btn bg-white text-bitcoin-orange hover:bg-gray-100">
              立即购买比特币
            </Link>
            <Link href="/what-is-bitcoin" className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-bitcoin-orange">
              了解更多信息
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
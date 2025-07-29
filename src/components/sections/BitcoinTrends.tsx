'use client'

import { useEffect, useRef, useState } from 'react'
import { useBitcoinHistory } from '@/hooks/useBitcoinHistory'
import { useBitcoinPrice } from '@/hooks/useBitcoinPrice'
import { formatPrice, formatChangePercent, getPriceChangeColor, type TimePeriod, type HistoricalPricePoint } from '@/lib/bitcoin-price'

export default function BitcoinTrends() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('7d')
  
  // 获取历史数据
  const { data: historyData, loading: historyLoading, error: historyError, changePeriod } = useBitcoinHistory({
    initialPeriod: selectedPeriod,
    autoUpdate: true,
    updateInterval: 300000 // 5分钟更新
  })
  
  // 获取当前价格用于统计卡片
  const { data: currentPrice } = useBitcoinPrice({ updateInterval: 30000 })

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

  // 计算统计数据
  const calculateStats = () => {
    if (!historyData?.prices.length || !currentPrice) {
      return {
        period24h: { value: '+2.34%', description: '过去24小时数据获取中...' },
        period7d: { value: '+8.76%', description: '过去7天数据获取中...' },
        period30d: { value: '+15.42%', description: '过去30天数据获取中...' },
        sentiment: { value: '贪婪', icon: '📈', description: '市场情绪分析中...' }
      }
    }

    const prices = historyData.prices
    const firstPrice = prices[0]?.price
    const lastPrice = prices[prices.length - 1]?.price

    if (!firstPrice || !lastPrice) {
      return {
        period24h: { value: formatChangePercent(currentPrice.usd_24h_change), description: `过去24小时比特币价格变化${formatChangePercent(currentPrice.usd_24h_change)}，数据来源：${currentPrice.source}` },
        period7d: { value: '+8.76%', description: '7天数据计算中...' },
        period30d: { value: '+15.42%', description: '30天数据计算中...' },
        sentiment: { value: '贪婪', icon: '📈', description: '基于当前市场表现分析' }
      }
    }

    const periodChange = ((lastPrice - firstPrice) / firstPrice) * 100
    const changeText = formatChangePercent(periodChange)

    return {
      period24h: { 
        value: formatChangePercent(currentPrice.usd_24h_change), 
        description: `过去24小时比特币价格变化${formatChangePercent(currentPrice.usd_24h_change)}，市场表现${currentPrice.usd_24h_change > 0 ? '强劲' : '疲软'}。` 
      },
      period7d: { 
        value: changeText, 
        description: `${selectedPeriod}周期内比特币${periodChange > 0 ? '上涨' : '下跌'}${Math.abs(periodChange).toFixed(2)}%，趋势${periodChange > 0 ? '向好' : '承压'}。` 
      },
      period30d: { 
        value: changeText, 
        description: `当前周期表现${periodChange > 0 ? '优异' : '不佳'}，${periodChange > 0 ? '机构投资者持续买入' : '市场谨慎观望'}。` 
      },
      sentiment: { 
        value: periodChange > 5 ? '极度贪婪' : periodChange > 0 ? '贪婪' : periodChange > -5 ? '谨慎' : '恐慌',
        icon: periodChange > 0 ? '📈' : '📉',
        description: `基于${selectedPeriod}周期价格走势分析，当前市场情绪${periodChange > 0 ? '偏向乐观' : '偏向谨慎'}。`
      }
    }
  }

  const stats = calculateStats()

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

  // 切换时间周期
  const handlePeriodChange = async (period: TimePeriod) => {
    setSelectedPeriod(period)
    await changePeriod(period)
  }

  // 加载状态
  if (historyLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="responsive-title text-center mb-8 sm:mb-12 text-gray-900">比特币走势</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-6 w-48"></div>
                <div className="h-80 bg-gray-300 rounded-xl"></div>
              </div>
            </div>
            <div className="space-y-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded mb-2 w-24"></div>
                    <div className="h-8 bg-gray-300 rounded mb-2 w-20"></div>
                    <div className="h-16 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">比特币走势</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg relative">
            {/* 数据源标识 */}
            {historyData && (
              <div className="absolute top-4 right-4 text-xs text-gray-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                数据源: {historyData.source}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
              <div className="text-lg sm:text-xl font-bold text-gray-900">
                BTC/USD 价格走势图
              </div>
              <div className="flex gap-1 sm:gap-2 flex-wrap justify-center sm:justify-end">
                {(['1h', '24h', '7d', '30d', '1y'] as TimePeriod[]).map((period) => (
                  <button
                    key={period}
                    onClick={() => handlePeriodChange(period)}
                    className={`px-3 py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-colors ${
                      selectedPeriod === period
                        ? 'bg-bitcoin-orange text-white'
                        : 'border border-gray-300 hover:border-bitcoin-orange hover:text-bitcoin-orange'
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
            
            <div className="h-60 sm:h-80 border border-gray-200 rounded-xl relative">
              {historyError ? (
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
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-gray-900 mb-2 font-semibold">24小时涨跌</h3>
              <div className={`text-2xl font-bold mb-2 ${getPriceChangeColor(currentPrice?.usd_24h_change || 0)}`}>
                {stats.period24h.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stats.period24h.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-gray-900 mb-2 font-semibold">
                {selectedPeriod === '1h' ? '1小时涨跌' : 
                 selectedPeriod === '24h' ? '24小时涨跌' : 
                 selectedPeriod === '7d' ? '7天涨跌' : 
                 selectedPeriod === '30d' ? '30天涨跌' : '1年涨跌'}
              </h3>
              <div className={`text-2xl font-bold mb-2 ${getPriceChangeColor(parseFloat(stats.period7d.value))}`}>
                {stats.period7d.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stats.period7d.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-gray-900 mb-2 font-semibold">周期表现</h3>
              <div className={`text-2xl font-bold mb-2 ${getPriceChangeColor(parseFloat(stats.period30d.value))}`}>
                {stats.period30d.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stats.period30d.description}
              </p>
            </div>
            
            <div className={`p-6 rounded-2xl text-white ${
              stats.sentiment.value.includes('贪婪') ? 'bg-gradient-to-r from-green-500 to-green-600' :
              stats.sentiment.value.includes('恐慌') ? 'bg-gradient-to-r from-red-500 to-red-600' :
              'bg-gradient-to-r from-yellow-500 to-orange-500'
            }`}>
              <h3 className="mb-2 font-semibold">市场情绪</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{stats.sentiment.icon}</span>
                <div className="text-2xl font-bold">{stats.sentiment.value}</div>
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                {stats.sentiment.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
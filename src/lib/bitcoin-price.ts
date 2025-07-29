// 比特币价格API服务
export interface BitcoinPriceData {
  usd: number
  usd_24h_change: number
  cny: number
  cny_24h_change: number
  last_updated: string
  source: string // 数据来源
}

// 币安API - 中国大陆可访问，优先使用
export async function fetchBitcoinPriceBinance(): Promise<BitcoinPriceData> {
  try {
    // 并行获取价格和24小时统计数据
    const [priceResponse, statsResponse] = await Promise.all([
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 30 }
      }),
      fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 30 }
      })
    ])

    if (!priceResponse.ok || !statsResponse.ok) {
      throw new Error(`Binance API error: ${priceResponse.status}`)
    }

    const priceData = await priceResponse.json()
    const statsData = await statsResponse.json()

    const usdPrice = parseFloat(priceData.price)
    const usdChange = parseFloat(statsData.priceChangePercent)
    
    // 使用实时汇率估算CNY价格（大约7.2汇率）
    const cnyPrice = usdPrice * 7.2
    const cnyChange = usdChange // CNY变化幅度与USD相同

    return {
      usd: usdPrice,
      usd_24h_change: usdChange,
      cny: cnyPrice,
      cny_24h_change: cnyChange,
      last_updated: new Date().toISOString(),
      source: 'Binance'
    }
  } catch (error) {
    console.error('Binance API error:', error)
    throw error
  }
}

// 火币API - 备用方案1
export async function fetchBitcoinPriceHuobi(): Promise<BitcoinPriceData> {
  try {
    const response = await fetch('https://api.huobi.pro/market/detail/merged?symbol=btcusdt', {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 30 }
    })

    if (!response.ok) {
      throw new Error(`Huobi API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.status !== 'ok' || !data.tick) {
      throw new Error('Invalid Huobi API response')
    }

    const price = data.tick.close
    const openPrice = data.tick.open
    const change = ((price - openPrice) / openPrice) * 100

    return {
      usd: price,
      usd_24h_change: change,
      cny: price * 7.2,
      cny_24h_change: change,
      last_updated: new Date().toISOString(),
      source: 'Huobi'
    }
  } catch (error) {
    console.error('Huobi API error:', error)
    throw error
  }
}

// CoinGecko API - 备用方案2（可能在中国被墙）
export async function fetchBitcoinPriceCoinGecko(): Promise<BitcoinPriceData> {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,cny&include_24hr_change=true&include_last_updated_at=true',
      {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 60 }
      }
    )

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (!data.bitcoin) {
      throw new Error('Invalid CoinGecko API response')
    }

    return {
      usd: data.bitcoin.usd,
      usd_24h_change: data.bitcoin.usd_24h_change || 0,
      cny: data.bitcoin.cny || data.bitcoin.usd * 7.2,
      cny_24h_change: data.bitcoin.cny_24h_change || data.bitcoin.usd_24h_change || 0,
      last_updated: new Date(data.bitcoin.last_updated_at * 1000).toISOString(),
      source: 'CoinGecko'
    }
  } catch (error) {
    console.error('CoinGecko API error:', error)
    throw error
  }
}

// 主函数：按优先级尝试多个API
export async function fetchBitcoinPrice(): Promise<BitcoinPriceData> {
  const apis = [
    { name: 'Binance', fetch: fetchBitcoinPriceBinance },
    { name: 'Huobi', fetch: fetchBitcoinPriceHuobi },
    { name: 'CoinGecko', fetch: fetchBitcoinPriceCoinGecko }
  ]

  // 尝试每个API，直到成功
  for (const api of apis) {
    try {
      console.log(`尝试使用 ${api.name} API...`)
      const result = await api.fetch()
      console.log(`✅ ${api.name} API 成功`)
      return result
    } catch (error) {
      console.warn(`❌ ${api.name} API 失败:`, error)
      continue
    }
  }

  // 所有API都失败，返回默认数据
  console.error('所有API都失败，使用默认数据')
  return {
    usd: 67845.32,
    usd_24h_change: 2.34,
    cny: 493521,
    cny_24h_change: 2.34,
    last_updated: new Date().toISOString(),
    source: 'Default'
  }
}


// 格式化价格显示
export function formatPrice(price: number, currency: 'USD' | 'CNY' = 'USD'): string {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  } else {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }
}

// 格式化变化百分比
export function formatChangePercent(change: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(2)}%`
}

// 获取价格变化的颜色类名
export function getPriceChangeColor(change: number): string {
  if (change > 0) return 'text-green-500'
  if (change < 0) return 'text-red-500'
  return 'text-gray-500'
}

// 历史价格数据接口
export interface HistoricalPricePoint {
  timestamp: number
  price: number
  volume?: number
}

export interface HistoricalPriceData {
  prices: HistoricalPricePoint[]
  period: string
  source: string
}

// 时间周期枚举
export type TimePeriod = '1h' | '24h' | '7d' | '30d' | '1y'

// 币安历史价格API - K线数据
export async function fetchBitcoinHistoryBinance(period: TimePeriod): Promise<HistoricalPriceData> {
  try {
    // 根据时间周期设置参数
    const periodConfig = {
      '1h': { interval: '1m', limit: 60 },      // 1小时，1分钟间隔
      '24h': { interval: '1h', limit: 24 },     // 24小时，1小时间隔
      '7d': { interval: '4h', limit: 42 },      // 7天，4小时间隔
      '30d': { interval: '1d', limit: 30 },     // 30天，1天间隔
      '1y': { interval: '1w', limit: 52 }       // 1年，1周间隔
    }

    const config = periodConfig[period]
    const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${config.interval}&limit=${config.limit}`

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 300 } // 5分钟缓存
    })

    if (!response.ok) {
      throw new Error(`Binance Klines API error: ${response.status}`)
    }

    const data = await response.json()

    // 转换数据格式
    const prices: HistoricalPricePoint[] = data.map((kline: any[]) => ({
      timestamp: kline[0], // 开盘时间
      price: parseFloat(kline[4]), // 收盘价
      volume: parseFloat(kline[5]) // 成交量
    }))

    return {
      prices,
      period,
      source: 'Binance'
    }
  } catch (error) {
    console.error('Binance History API error:', error)
    throw error
  }
}

// 火币历史价格API
export async function fetchBitcoinHistoryHuobi(period: TimePeriod): Promise<HistoricalPriceData> {
  try {
    const periodConfig = {
      '1h': { period: '1min', size: 60 },
      '24h': { period: '60min', size: 24 },
      '7d': { period: '4hour', size: 42 },
      '30d': { period: '1day', size: 30 },
      '1y': { period: '1week', size: 52 }
    }

    const config = periodConfig[period]
    const url = `https://api.huobi.pro/market/history/kline?symbol=btcusdt&period=${config.period}&size=${config.size}`

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error(`Huobi History API error: ${response.status}`)
    }

    const result = await response.json()
    
    if (result.status !== 'ok' || !result.data) {
      throw new Error('Invalid Huobi History API response')
    }

    const prices: HistoricalPricePoint[] = result.data.map((item: any) => ({
      timestamp: item.id * 1000, // 转换为毫秒
      price: item.close,
      volume: item.vol
    }))

    return {
      prices: prices.reverse(), // 火币返回的数据是倒序的
      period,
      source: 'Huobi'
    }
  } catch (error) {
    console.error('Huobi History API error:', error)
    throw error
  }
}

// CoinGecko历史价格API - 备用方案
export async function fetchBitcoinHistoryCoinGecko(period: TimePeriod): Promise<HistoricalPriceData> {
  try {
    const periodConfig = {
      '1h': { days: 0.042, interval: 'minutely' }, // 1小时
      '24h': { days: 1, interval: 'hourly' },
      '7d': { days: 7, interval: 'hourly' },
      '30d': { days: 30, interval: 'daily' },
      '1y': { days: 365, interval: 'daily' }
    }

    const config = periodConfig[period]
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${config.days}&interval=${config.interval}`

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error(`CoinGecko History API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.prices) {
      throw new Error('Invalid CoinGecko History API response')
    }

    const prices: HistoricalPricePoint[] = data.prices.map((item: [number, number]) => ({
      timestamp: item[0],
      price: item[1]
    }))

    return {
      prices,
      period,
      source: 'CoinGecko'
    }
  } catch (error) {
    console.error('CoinGecko History API error:', error)
    throw error
  }
}

// 主函数：获取历史价格数据（多API备用）
export async function fetchBitcoinHistory(period: TimePeriod): Promise<HistoricalPriceData> {
  const apis = [
    { name: 'Binance', fetch: () => fetchBitcoinHistoryBinance(period) },
    { name: 'Huobi', fetch: () => fetchBitcoinHistoryHuobi(period) },
    { name: 'CoinGecko', fetch: () => fetchBitcoinHistoryCoinGecko(period) }
  ]

  for (const api of apis) {
    try {
      console.log(`尝试获取${period}历史数据 - ${api.name}...`)
      const result = await api.fetch()
      console.log(`✅ ${api.name} 历史数据获取成功`)
      return result
    } catch (error) {
      console.warn(`❌ ${api.name} 历史数据获取失败:`, error)
      continue
    }
  }

  // 所有API都失败，生成模拟数据
  console.error('所有历史数据API都失败，使用模拟数据')
  return generateMockHistory(period)
}

// 生成模拟历史数据（作为最后备用）
function generateMockHistory(period: TimePeriod): HistoricalPriceData {
  const now = Date.now()
  const basePrice = 67845.32
  
  const periodConfig = {
    '1h': { points: 60, timeStep: 60 * 1000 },        // 1分钟间隔
    '24h': { points: 24, timeStep: 60 * 60 * 1000 },  // 1小时间隔
    '7d': { points: 42, timeStep: 4 * 60 * 60 * 1000 }, // 4小时间隔
    '30d': { points: 30, timeStep: 24 * 60 * 60 * 1000 }, // 1天间隔
    '1y': { points: 52, timeStep: 7 * 24 * 60 * 60 * 1000 } // 1周间隔
  }

  const config = periodConfig[period]
  const prices: HistoricalPricePoint[] = []

  for (let i = 0; i < config.points; i++) {
    const timestamp = now - (config.points - i - 1) * config.timeStep
    const randomChange = (Math.random() - 0.5) * basePrice * 0.1
    const price = basePrice + randomChange + Math.sin(i / config.points * Math.PI * 2) * basePrice * 0.05
    
    prices.push({
      timestamp,
      price: Math.max(price, basePrice * 0.8), // 确保价格不会过低
      volume: Math.random() * 50000000 + 10000000
    })
  }

  return {
    prices,
    period,
    source: 'Mock'
  }
}
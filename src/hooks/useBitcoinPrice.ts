'use client'

import { useState, useEffect, useCallback } from 'react'
import { fetchBitcoinPrice, type BitcoinPriceData } from '@/lib/bitcoin-price'

interface UseBitcoinPriceOptions {
  updateInterval?: number // 更新间隔，单位：毫秒
  autoUpdate?: boolean    // 是否自动更新
}

interface UseBitcoinPriceReturn {
  data: BitcoinPriceData | null
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  refresh: () => Promise<void>
}

export function useBitcoinPrice(options: UseBitcoinPriceOptions = {}): UseBitcoinPriceReturn {
  const { updateInterval = 30000, autoUpdate = true } = options
  
  const [data, setData] = useState<BitcoinPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const refresh = useCallback(async () => {
    try {
      setError(null)
      const priceData = await fetchBitcoinPrice()
      setData(priceData)
      setLastUpdated(new Date())
      setLoading(false)
    } catch (err) {
      setError('获取价格失败')
      setLoading(false)
      console.error('Price fetch failed:', err)
    }
  }, [])

  useEffect(() => {
    refresh()
    
    if (autoUpdate) {
      const interval = setInterval(refresh, updateInterval)
      return () => clearInterval(interval)
    }
  }, [refresh, autoUpdate, updateInterval])

  return {
    data,
    loading,
    error,
    lastUpdated,
    refresh
  }
}
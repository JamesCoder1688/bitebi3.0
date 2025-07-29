'use client'

import { useState, useEffect, useCallback } from 'react'
import { fetchBitcoinHistory, type HistoricalPriceData, type TimePeriod } from '@/lib/bitcoin-price'

interface UseBitcoinHistoryOptions {
  initialPeriod?: TimePeriod
  autoUpdate?: boolean
  updateInterval?: number
}

interface UseBitcoinHistoryReturn {
  data: HistoricalPriceData | null
  loading: boolean
  error: string | null
  currentPeriod: TimePeriod
  changePeriod: (period: TimePeriod) => Promise<void>
  refresh: () => Promise<void>
}

export function useBitcoinHistory(options: UseBitcoinHistoryOptions = {}): UseBitcoinHistoryReturn {
  const { 
    initialPeriod = '7d', 
    autoUpdate = false, 
    updateInterval = 300000 // 5分钟
  } = options
  
  const [data, setData] = useState<HistoricalPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPeriod, setCurrentPeriod] = useState<TimePeriod>(initialPeriod)

  const fetchData = useCallback(async (period: TimePeriod) => {
    try {
      setLoading(true)
      setError(null)
      
      const historyData = await fetchBitcoinHistory(period)
      setData(historyData)
      setCurrentPeriod(period)
    } catch (err) {
      setError('获取历史数据失败')
      console.error('History fetch failed:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const changePeriod = useCallback(async (period: TimePeriod) => {
    await fetchData(period)
  }, [fetchData])

  const refresh = useCallback(async () => {
    await fetchData(currentPeriod)
  }, [fetchData, currentPeriod])

  // 初始加载
  useEffect(() => {
    fetchData(initialPeriod)
  }, [fetchData, initialPeriod])

  // 自动更新
  useEffect(() => {
    if (autoUpdate) {
      const interval = setInterval(() => {
        fetchData(currentPeriod)
      }, updateInterval)
      
      return () => clearInterval(interval)
    }
  }, [autoUpdate, updateInterval, fetchData, currentPeriod])

  return {
    data,
    loading,
    error,
    currentPeriod,
    changePeriod,
    refresh
  }
}
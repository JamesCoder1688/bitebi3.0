import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import BitcoinPrice from '@/components/sections/BitcoinPrice'

// 懒加载非关键组件
const BitcoinTrends = dynamic(() => import('@/components/sections/BitcoinTrends'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>
})
const InvestmentCallToAction = dynamic(() => import('@/components/sections/InvestmentCallToAction'))
const RecommendedExchanges = dynamic(() => import('@/components/sections/RecommendedExchanges'))
const WhatIsBitcoin = dynamic(() => import('@/components/sections/WhatIsBitcoin'))
const Stats = dynamic(() => import('@/components/sections/Stats'))
const Features = dynamic(() => import('@/components/sections/Features'))
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.bitebi.info',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <BitcoinPrice />
      <BitcoinTrends />
      <InvestmentCallToAction />
      <RecommendedExchanges />
      <WhatIsBitcoin />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  )
}
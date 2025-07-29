import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '比特币 - 买比特币 - 比特币价格',
  description: '一个比特币专业网站,比特币价格实时行情,买比特币',
  keywords: '比特币,比特币怎么买,比特币价格,比特币今日价格行情,比特币最新价格,买比特币,比特币行情',
  authors: [{ name: 'bitebi.info' }],
  robots: 'index, follow',
  openGraph: {
    title: '比特币 - 买比特币 - 比特币价格',
    description: '一个比特币专业网站,比特币价格实时行情,买比特币',
    url: 'https://www.bitebi.info/',
    type: 'website',
    images: [
      {
        url: 'https://www.bitebi.info/images/bitcoin-og-image.svg',
        width: 1200,
        height: 630,
        alt: '比特币投资指南 - bitebi.info专业的比特币价格分析和投资平台',
      },
    ],
    siteName: 'bitebi.info',
  },
  twitter: {
    card: 'summary_large_image',
    title: '比特币 - 买比特币 - 比特币价格',
    description: '一个比特币专业网站,比特币价格实时行情,买比特币',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://www.bitebi.info/" />
        
        {/* 性能优化 - DNS预解析和预连接 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* 关键资源预加载 */}
        <link rel="preload" href="/images/bitcoin-og-image.svg" as="image" />
        
        {/* 优化字体加载 */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "bitebi.info",
              "url": "https://www.bitebi.info",
              "description": "一个比特币专业网站,比特币价格实时行情,买比特币",
              "publisher": {
                "@type": "Organization",
                "name": "bitebi.info",
                "url": "https://www.bitebi.info"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.bitebi.info/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://www.bitebi.info"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "bitebi.info",
              "url": "https://www.bitebi.info",
              "description": "一个比特币专业网站,比特币价格实时行情,买比特币",
              "serviceType": "比特币投资信息服务",
              "areaServed": {
                "@type": "Country",
                "name": "China"
              },
              "currenciesAccepted": ["BTC", "CNY", "USD"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "比特币投资服务",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "比特币价格信息",
                      "description": "实时比特币价格行情和分析"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "比特币购买指南",
                      "description": "专业的比特币购买教程和平台推荐"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
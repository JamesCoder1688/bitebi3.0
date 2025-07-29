import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, getAllCategories, getFeaturedPosts, getAllTags } from '@/lib/blog-data'
import FeaturedPost from '@/components/blog/FeaturedPost'

export const metadata: Metadata = {
  title: '比特币博客 - 数字货币资讯与分析 - 区块链新闻 | bitebi.info',
  description: '最新的比特币资讯、市场分析、投资策略和区块链技术解读。专业的数字货币博客，帮助您了解加密货币市场动态。',
  keywords: '比特币博客,数字货币资讯,区块链新闻,比特币分析,加密货币投资,BTC资讯',
}

export default function Blog() {
  const categories = getAllCategories()
  const featuredPosts = getFeaturedPosts()
  const regularPosts = blogPosts.filter(post => !post.featured)
  const popularTags = getAllTags()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            比特币博客
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            最新的比特币资讯、深度分析和投资见解，帮您把握数字货币投资机会
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#latest-posts" className="btn btn-primary">
              阅读最新文章
            </Link>
            <Link href="/bitcoin-price" className="btn btn-secondary">
              查看实时行情
            </Link>
          </div>
        </div>
      </section>

      {/* 分类导航 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  index === 0
                    ? 'bg-bitcoin-orange text-white'
                    : 'border border-gray-300 hover:border-bitcoin-orange hover:text-bitcoin-orange'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 特色文章 */}
      <section id="latest-posts" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-bitcoin-orange rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                特色精选
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              编辑精心挑选的优质内容，为您带来最有价值的比特币投资见解
            </p>
          </div>
          
          {/* 主要特色文章 */}
          <div className="mb-12">
            {featuredPosts.slice(0, 1).map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
          
          {/* 次要特色文章 */}
          {featuredPosts.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-bitcoin-orange/10 text-bitcoin-orange px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-bitcoin-orange transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {post.author}
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-bitcoin-orange hover:text-bitcoin-dark transition-colors font-medium text-sm"
                      >
                        阅读全文 →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 最新文章快览 */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">最新发布</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              跟上市场节拍，获取最新的比特币资讯和分析
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularPosts.slice(0, 6).map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-bitcoin-orange transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-bitcoin-orange hover:text-bitcoin-dark transition-colors font-medium"
                    >
                      阅读 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="#all-posts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bitcoin-orange text-white rounded-full hover:bg-bitcoin-dark transition-colors font-medium"
            >
              查看所有文章
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* 热门标签 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            热门标签
          </h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {popularTags.map((tag, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 探索更多内容 */}
      <section className="py-20 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                开启比特币投资之旅
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl mb-10 opacity-95 leading-relaxed">
              掌握最新的市场动态，学习专业的投资知识。<br/>
              从新手入门到高级策略，我们为您提供全方位的指导。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-bold text-lg mb-1">精准分析</div>
                <div className="text-sm opacity-90">基于数据的深度市场分析</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">📈</div>
                <div className="font-bold text-lg mb-1">实时更新</div>
                <div className="text-sm opacity-90">最新的价格动态和趋势</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-bold text-lg mb-1">风险管理</div>
                <div className="text-sm opacity-90">专业的风险控制建议</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/what-is-bitcoin" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bitcoin-orange rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                学习基础知识
              </Link>
              <Link 
                href="/buy-bitcoin" 
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white bg-transparent text-white rounded-full text-lg font-semibold hover:bg-white hover:text-bitcoin-orange transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                开始投资
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              完全免费的比特币学习平台 • 专业内容 • 持续更新
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, getAllCategories, getAllTags } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: '网站地图 - 所有页面导航索引 | bitebi.info',
  description: 'bitebi.info完整的网站地图，包含所有页面链接和内容索引，帮助您快速找到需要的比特币信息。',
  keywords: '网站地图,页面导航,内容索引,比特币页面,网站结构',
}

export default function Sitemap() {
  const categories = getAllCategories().filter(cat => cat !== '全部')
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-3xl flex items-center justify-center font-bold text-2xl shadow-lg">
              🗺️
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              网站地图
            </h1>
          </div>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            网站所有页面导航索引，帮您快速找到所需内容
          </p>
        </div>
      </section>

      {/* 主要页面导航 */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">主要页面</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              网站核心功能页面，提供完整的比特币信息服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 首页 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href="/" className="hover:text-bitcoin-orange transition-colors">
                  首页
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                网站主页，包含比特币价格、市场趋势、核心功能介绍等
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">实时价格</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">市场分析</span>
                <span className="inline-block bg-white px-2 py-1 rounded">功能导航</span>
              </div>
            </div>

            {/* 比特币知识 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href="/what-is-bitcoin" className="hover:text-bitcoin-orange transition-colors">
                  比特币是什么
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                全面介绍比特币的基本概念、工作原理和核心特征
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">基础知识</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">工作原理</span>
                <span className="inline-block bg-white px-2 py-1 rounded">技术特点</span>
              </div>
            </div>

            {/* 购买指南 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href="/buy-bitcoin" className="hover:text-bitcoin-orange transition-colors">
                  比特币怎么买
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                新手购买指南，包含交易所推荐、购买流程和安全提示
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">购买流程</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">交易所</span>
                <span className="inline-block bg-white px-2 py-1 rounded">安全指南</span>
              </div>
            </div>

            {/* 价格行情 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href="/bitcoin-price" className="hover:text-bitcoin-orange transition-colors">
                  比特币价格
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                实时价格行情、历史走势图表和详细的市场数据分析
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">实时价格</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">走势图</span>
                <span className="inline-block bg-white px-2 py-1 rounded">市场数据</span>
              </div>
            </div>

            {/* 博客文章 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href="/blog" className="hover:text-bitcoin-orange transition-colors">
                  比特币博客
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                专业的比特币资讯、市场分析和投资教育内容
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">市场分析</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">投资指南</span>
                <span className="inline-block bg-white px-2 py-1 rounded">技术解析</span>
              </div>
            </div>

            {/* 关于我们 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href="/about" className="hover:text-bitcoin-orange transition-colors">
                  关于我们
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                了解bitebi.info的发展历程、团队介绍和服务理念
              </p>
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">公司介绍</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-2">团队简介</span>
                <span className="inline-block bg-white px-2 py-1 rounded">联系方式</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 博客内容结构 */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">博客内容</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              博客页面包含特色精选、最新发布和热门标签等内容结构
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-24 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light flex items-center justify-center">
                <div className="text-3xl text-white">⭐</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">特色精选</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">编辑精心挑选的优质内容，提供最有价值的投资见解</p>
                <div className="text-xs text-gray-500">
                  {featuredPosts.length} 篇特色文章
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-24 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-3xl text-white">🔥</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">最新发布</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">跟虚市场节拍，获取最新的比特币资讯和分析</p>
                <div className="text-xs text-gray-500">
                  {recentPosts.length} 篇最新文章
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-24 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-3xl text-white">🏷️</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">热门标签</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">按标签浏览相关主题的文章内容</p>
                <div className="text-xs text-gray-500">
                  {getAllTags().length} 个热门标签
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              注意：博客页面上的分类导航仅作显示用途，目前不支持实际的过滤功能
            </p>
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">精选文章</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              编辑推荐的优质内容，为您提供最有价值的比特币投资见解
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-bitcoin-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    特色
                  </span>
                  <span className="text-sm text-gray-500">{post.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-bitcoin-orange transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">最新文章</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h4 className="text-md font-semibold text-gray-900 mb-2 hover:text-bitcoin-orange transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 法律信息页面 */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">法律信息</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              网站的法律条款、隐私政策和相关声明信息
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Link href="/terms" className="hover:text-bitcoin-orange transition-colors">
                  网站声明
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                使用条款、免责声明和相关法律条款，请在使用网站前仔细阅读。
              </p>
              <Link 
                href="/terms"
                className="inline-flex items-center text-bitcoin-orange hover:text-bitcoin-dark transition-colors text-sm font-medium"
              >
                查看详情 →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Link href="/privacy" className="hover:text-bitcoin-orange transition-colors">
                  隐私条款
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                用户隐私保护政策，详细说明个人信息的收集、使用和保护措施。
              </p>
              <Link 
                href="/privacy"
                className="inline-flex items-center text-bitcoin-orange hover:text-bitcoin-dark transition-colors text-sm font-medium"
              >
                查看详情 →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">网站地图</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                您当前所在的页面，包含网站所有页面的导航索引和内容概览。
              </p>
              <span className="inline-flex items-center text-gray-400 text-sm font-medium">
                当前页面
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 快速导航 */}
      <section className="py-20 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">快速导航</h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            快速访问您最需要的功能和信息
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">🏠</div>
              <div className="font-semibold">返回首页</div>
            </Link>
            
            <Link 
              href="/bitcoin-price"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">📈</div>
              <div className="font-semibold">实时价格</div>
            </Link>
            
            <Link 
              href="/blog"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">📝</div>
              <div className="font-semibold">阅读博客</div>
            </Link>
            
            <Link 
              href="/buy-bitcoin"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">💰</div>
              <div className="font-semibold">购买指南</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
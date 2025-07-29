import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getPostById, getRelatedPosts, blogPosts } from '@/lib/blog-data'

// 生成静态参数
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const postId = parseInt(id)
  const post = getPostById(postId)
  
  if (!post) {
    return {
      title: '文章未找到 | bitebi.info'
    }
  }

  return {
    title: `${post.title} | bitebi.info`,
    description: post.excerpt,
    keywords: post.tags.join(','),
  }
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params
  const postId = parseInt(id)
  const post = getPostById(postId)
  
  if (!post) {
    redirect('/blog')
  }

  const relatedPosts = getRelatedPosts(postId, 3)

  return (
    <>
      {/* 面包屑导航 */}
      <nav className="bg-gray-100 py-4">
        <div className="container">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-bitcoin-orange hover:underline">首页</Link>
            <span className="text-gray-500">/</span>
            <Link href="/blog" className="text-bitcoin-orange hover:underline">博客</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* 文章内容 */}
      <article className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          {/* 文章头部 */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-bitcoin-orange text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500">{post.readTime}阅读</span>
              {post.featured && (
                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                  特色文章
                </span>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-gray-500 text-sm">{post.date}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-bitcoin-orange hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* 文章正文 - 优化版本 */}
          <div className="prose prose-lg max-w-none">
            {/* 文章摘要 */}
            <div className="mb-12 p-8 bg-gradient-to-br from-bitcoin-orange/5 to-bitcoin-light/5 rounded-2xl border border-bitcoin-orange/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-bitcoin-orange rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">文章摘要</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            
            {/* 文章内容 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">文章正文</h2>
              </div>
              
              {/* 格式化显示文章内容 */}
              <div className="article-content space-y-6">
                {post.content.split('\n\n').slice(0, 15).map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
                        {paragraph.replace('# ', '')}
                      </h1>
                    )
                  } else if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-800 mt-6 mb-3">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-700 mt-4 mb-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 leading-relaxed">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    )
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    )
                  }
                  return null
                })}
              </div>
              
              {/* 展开更多内容按钮 */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bitcoin-orange rounded-full flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">文章预览</p>
                      <p className="text-sm text-gray-600">这里显示了文章的前15个段落</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {Math.ceil(post.content.length / 300)} 段落内容
                  </div>
                </div>
              </div>
            </div>

            {/* 文章统计信息 */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-2xl font-bold text-bitcoin-orange mb-2">
                  {post.content.split(' ').length}
                </div>
                <div className="text-sm text-gray-600">字数统计</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-2xl font-bold text-bitcoin-orange mb-2">
                  {post.readTime}
                </div>
                <div className="text-sm text-gray-600">预计阅读时间</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <div className="text-2xl font-bold text-bitcoin-orange mb-2">
                  {post.tags.length}
                </div>
                <div className="text-sm text-gray-600">相关标签</div>
              </div>
            </div>
          </div>

          {/* 文章互动区域 */}
          <div className="mt-12 space-y-8">
            {/* 分享按钮 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">分享这篇文章</h3>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                  </svg>
                  WhatsApp
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  复制链接
                </button>
              </div>
            </div>

            {/* 作者信息 */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">关于作者</h3>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{post.author}</div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    专业的数字货币分析师，具有多年加密货币市场研究经验。专注于比特币技术分析、市场趋势和投资策略研究。
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">发布日期: {post.date}</span>
                    <span className="text-sm text-gray-500">阅读时间: {post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 文章底部 */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-bitcoin-orange/10 to-bitcoin-light/10 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">免责声明</h3>
                  <p className="text-gray-700 leading-relaxed">
                    本文内容仅供参考，不构成投资建议。数字货币投资存在较大风险，请根据自身情况谨慎投资。
                    本站不对任何投资损失承担责任。投资者应该进行独立研究并咨询专业的投资顾问。
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link 
                href="/blog"
                className="flex items-center space-x-2 text-bitcoin-orange hover:text-bitcoin-dark transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>返回博客列表</span>
              </Link>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>文章ID: {post.id}</span>
                <span>最后更新: {post.date}</span>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* 相关文章 */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              相关文章推荐
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-bitcoin-orange text-white px-2 py-1 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-xs">{relatedPost.readTime}阅读</span>
                    </div>
                    
                    <Link href={`/blog/${relatedPost.id}`}>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-bitcoin-orange transition-colors cursor-pointer">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-gray-500 text-xs">
                        {relatedPost.date}
                      </div>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-bitcoin-orange text-sm font-medium hover:text-bitcoin-dark transition-colors"
                      >
                        阅读更多 →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bitcoin-orange via-bitcoin-light to-yellow-500 text-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                喜欢这篇文章？
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl mb-10 opacity-95 leading-relaxed">
              继续探索更多比特币相关内容，深入了解数字货币世界。<br/>
              掌握投资知识，做出明智的投资决策！
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-bold text-lg mb-1">学习指南</div>
                <div className="text-sm opacity-90">从入门到精通的完整教程</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">💡</div>
                <div className="font-bold text-lg mb-1">投资策略</div>
                <div className="text-sm opacity-90">专业的投资建议和风险管理</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-bold text-lg mb-1">市场分析</div>
                <div className="text-sm opacity-90">实时行情和技术分析工具</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bitcoin-orange rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                查看更多文章
              </Link>
              <Link 
                href="/bitcoin-price" 
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white bg-transparent text-white rounded-full text-lg font-semibold hover:bg-white hover:text-bitcoin-orange transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                查看实时行情
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              专业的比特币资讯平台 • 完全免费 • 随时访问
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
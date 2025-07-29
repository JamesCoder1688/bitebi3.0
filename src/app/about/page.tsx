import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '关于我们 - 专业比特币信息服务平台 | bitebi.info',
  description: 'bitebi.info是专业的比特币信息服务平台，致力于为用户提供准确、及时的比特币价格行情、深度分析和投资教育服务。',
  keywords: '关于我们,比特币平台,数字货币服务,区块链信息,投资教育',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 px-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-2xl sm:rounded-3xl flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-lg">
              ₿
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              关于我们
            </h1>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto px-4">
            专业比特币信息服务平台，为全球华语用户提供可信赖的数字货币资讯
          </p>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-title text-gray-900 mb-4 sm:mb-6">我们的使命</h2>
              <div className="w-16 sm:w-24 h-1 bg-bitcoin-orange mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
                让每个人都能轻松理解和参与比特币投资，通过专业的信息服务和教育内容，帮助用户做出明智的投资决策。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
              <div className="px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">bitebi.info 是什么？</h3>
                <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    bitebi.info 成立于2021年，是一家专注于比特币和数字货币领域的信息服务平台。我们致力于为华语用户提供最准确、最及时的比特币价格行情、市场分析和投资教育内容。
                  </p>
                  <p>
                    作为专业的比特币信息平台，我们汇集了来自全球主要交易所的实时数据，通过先进的数据分析技术，为用户呈现清晰易懂的市场信息和投资见解。
                  </p>
                  <p>
                    我们相信，通过提供优质的信息服务和教育内容，可以帮助更多人理解比特币的价值，并在数字货币投资中获得成功。
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mx-4">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bitcoin-orange mb-1 sm:mb-2">500万+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">用户信赖</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bitcoin-orange mb-1 sm:mb-2">99.9%</div>
                    <div className="text-gray-600 text-xs sm:text-sm">数据准确率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bitcoin-orange mb-1 sm:mb-2">24/7</div>
                    <div className="text-gray-600 text-xs sm:text-sm">实时监控</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-bitcoin-orange mb-1 sm:mb-2">3年+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">专业服务</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值 */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="responsive-title text-gray-900 mb-4 sm:mb-6">我们的核心价值</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              坚持专业、诚信、创新的价值理念，为用户提供最优质的服务体验
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">专业可靠</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                汇集行业专家团队，提供专业的市场分析和投资建议，确保信息的准确性和权威性。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">实时更新</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                7×24小时实时监控全球主要交易所数据，为用户提供最新的价格行情和市场动态。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">教育为先</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                提供全面的比特币知识普及和投资教育内容，帮助用户建立正确的投资理念。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">用户至上</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                始终以用户需求为导向，不断优化产品体验，为用户创造最大价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">我们的服务</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              为用户提供全方位的比特币信息服务，涵盖价格行情、市场分析、投资教育等多个领域
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <div className="text-4xl mb-6">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">实时行情</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  实时比特币价格追踪
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多交易所价格对比
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  历史价格走势图表
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  市场深度分析
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">专业分析</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  市场趋势分析报告
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  技术指标分析
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  基本面研究
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  投资策略建议
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <div className="text-4xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">投资教育</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  比特币基础知识普及
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  投资风险教育
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  交易策略指导
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-bitcoin-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  安全存储指南
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">专业团队</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              来自金融、技术、投资等领域的专业人士，为平台的专业性和可靠性提供保障
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                分析
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">市场分析师</h3>
              <p className="text-gray-600 text-sm mb-4">具有丰富的金融市场分析经验</p>
              <div className="text-sm text-gray-500">
                <p>• 5年以上数字货币市场经验</p>
                <p>• 专业金融分析背景</p>
                <p>• CFA持证人</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                技术
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">技术团队</h3>
              <p className="text-gray-600 text-sm mb-4">保障平台稳定运行和数据准确</p>
              <div className="text-sm text-gray-500">
                <p>• 区块链技术专家</p>
                <p>• 大数据处理经验</p>
                <p>• 7×24小时技术支持</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                内容
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">内容团队</h3>
              <p className="text-gray-600 text-sm mb-4">提供专业的教育内容和资讯</p>
              <div className="text-sm text-gray-500">
                <p>• 金融媒体工作经验</p>
                <p>• 专业内容创作能力</p>
                <p>• 多语言服务支持</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">联系我们</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            如果您有任何问题或建议，欢迎随时与我们联系
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">邮箱联系</h3>
              <p className="text-sm opacity-90">rhfty071@gmail.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">在线客服</h3>
              <p className="text-sm opacity-90">工作日 9:00-18:00</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2">官方网站</h3>
              <p className="text-sm opacity-90">www.bitebi.info</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bitcoin-price" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bitcoin-orange rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              查看比特币价格
            </Link>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white bg-transparent text-white rounded-full text-lg font-semibold hover:bg-white hover:text-bitcoin-orange transition-all duration-300"
            >
              阅读投资指南
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
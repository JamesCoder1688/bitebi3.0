import type { Metadata } from 'next'
import RealTimePriceDisplay from '@/components/bitcoin/RealTimePriceDisplay'

export const metadata: Metadata = {
  title: '购买比特币 - 如何买比特币 - 比特币交易指南 | bitebi.info',
  description: '详细的比特币购买指南，从注册开户到安全交易的完整流程。学习如何安全便捷地购买比特币，选择最佳交易平台。',
  keywords: '购买比特币,如何买比特币,比特币交易,比特币开户,比特币交易平台,买币指南',
  alternates: {
    canonical: 'https://www.bitebi.info/buy-bitcoin',
  },
}

export default function BuyBitcoin() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            如何购买比特币
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            完整的比特币购买指南，从零开始学会安全便捷地购买比特币
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-lg font-semibold mb-4 text-white">当前比特币价格</div>
            <RealTimePriceDisplay 
              className="text-center"
              showCNY={false}
              updateInterval={30000}
            />
          </div>
        </div>
      </section>

      {/* 购买步骤 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7931a%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-label="步骤列表图标">
                <title>购买步骤</title>
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              比特币购买步骤
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              简单四步，安全便捷地开始您的比特币投资之旅
            </p>
          </div>

          {/* 桌面端流程线 */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16">
            <div className="flex items-center space-x-8">
              <div className="w-32 h-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light opacity-30"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light opacity-30"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light opacity-30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-label="选择平台图标">
                    <title>选择交易平台</title>
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors">选择交易平台</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  选择信誉良好、安全可靠的比特币交易平台，如币安、OKX等知名交易所。
                </p>
                <a 
                  href="#exchanges"
                  className="inline-flex items-center text-bitcoin-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-bitcoin-dark"
                >
                  <span className="mr-2">查看推荐平台</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-label="用户认证图标">
                    <title>注册并验证</title>
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors">注册并验证</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  注册账户，完成实名认证和身份验证，确保账户安全和合规性。
                </p>
                <a 
                  href="#security"
                  className="inline-flex items-center text-bitcoin-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-bitcoin-dark"
                >
                  <span className="mr-2">了解安全</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-label="资金充值图标">
                    <title>资金充值</title>
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors">资金充值</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  通过银行卡、支付宝、微信等方式充值人民币或其他法币到交易账户。
                </p>
                <a 
                  href="#funding"
                  className="inline-flex items-center text-bitcoin-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-bitcoin-dark"
                >
                  <span className="mr-2">查看充值方式</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-label="购买比特币图标">
                    <title>购买比特币</title>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors">购买比特币</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  选择市价或限价订单，输入购买数量，确认交易即可完成比特币购买。
                </p>
                <a 
                  href="/bitcoin-price"
                  className="inline-flex items-center text-bitcoin-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-bitcoin-dark"
                >
                  <span className="mr-2">查看当前价格</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐交易平台 */}
      <section id="exchanges" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bitcoin-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-bitcoin-light rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-label="推荐平台图标">
                <title>推荐交易平台</title>
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              推荐交易平台
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选安全可靠的比特币交易平台，享受专属优惠
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 币安 - 首推 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-yellow-50/90 to-orange-50/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                    </svg>
                    <span>🏆 首选推荐</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-8 mt-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      币安
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Binance</h3>
                    <p className="text-gray-600 text-lg">全球最大数字货币交易所</p>
                    <div className="flex items-center mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">5.0 (99,999+ 评价)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30">
                    <div className="text-2xl font-bold text-bitcoin-orange">1.8亿+</div>
                    <div className="text-sm text-gray-600">全球用户</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30">
                    <div className="text-2xl font-bold text-bitcoin-orange">0.1%</div>
                    <div className="text-sm text-gray-600">最低手续费</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    '全球用户超过1.8亿，交易量排名第一',
                    '手续费低至0.1%，新用户享受优惠',
                    '7x24小时中文客服支持',
                    '多国合规牌照，安全保障基金',
                    '支持350+数字货币交易对'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700 bg-white/40 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="https://www.marketwebb.systems/activity/referral-entry/CPA?ref=CPA_00S1M89QTY" target="_blank" rel="noopener noreferrer" className="group/btn w-full bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white py-5 px-8 rounded-2xl font-bold hover:from-bitcoin-light hover:to-bitcoin-orange transition-all duration-300 text-center block transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <span className="text-lg">立即注册币安</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
                <p className="text-xs text-gray-500 mt-4 text-center bg-white/30 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  🎁 通过专属链接注册享受手续费优惠
                </p>
              </div>
            </div>
            
            {/* OKX */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      OKX
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">OKX</h3>
                    <p className="text-gray-600 text-lg">专业数字资产交易平台</p>
                    <div className="flex items-center mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">4.8 (80,000+ 评价)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">前3名</div>
                    <div className="text-sm text-gray-600">全球排名</div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">300+</div>
                    <div className="text-sm text-gray-600">交易对</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    '全球前三大数字货币交易所',
                    '300+数字货币交易对',
                    '专业的衍生品交易平台',
                    '多层次安全保障体系',
                    '支持多种法币入金方式'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700 bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="https://www.marketwebb.systems/activity/referral-entry/CPA?ref=CPA_00S1M89QTY" target="_blank" rel="noopener noreferrer" className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-8 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center block transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <span className="text-lg">注册OKX</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
                <p className="text-xs text-gray-500 mt-4 text-center bg-gray-50 rounded-lg p-2 border border-gray-100">
                  🔐 安全可靠的数字资产交易平台
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 安全提示 */}
      <section id="security" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            安全购买提示
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  !
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">选择正规平台</h3>
                  <p className="text-gray-600 leading-relaxed">
                    只在知名、有监管牌照的交易所购买比特币，避免使用不明来源的小平台。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  🔒
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">启用双重认证</h3>
                  <p className="text-gray-600 leading-relaxed">
                    务必启用2FA双重身份验证，使用Google Authenticator等应用增强账户安全。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  💰
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">分批购买</h3>
                  <p className="text-gray-600 leading-relaxed">
                    建议分批次购买，利用定投策略降低价格波动风险，避免一次性大额投入。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">使用官方App</h3>
                  <p className="text-gray-600 leading-relaxed">
                    下载官方应用程序，不要使用第三方修改版本，确保交易安全可靠。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  🔑
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">私钥管理</h3>
                  <p className="text-gray-600 leading-relaxed">
                    学会使用硬件钱包或冷钱包存储比特币，掌握私钥才真正拥有比特币。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  📚
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">持续学习</h3>
                  <p className="text-gray-600 leading-relaxed">
                    不断学习区块链和比特币知识，了解市场动态，做出理性投资决策。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="funding" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            购买比特币常见问题
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-2xl shadow-sm">
              <details className="p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-bitcoin-orange transition-colors">
                  支持哪些充值方式？
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-bitcoin-orange rounded-full mr-3"></span>
                      <span><strong>银行卡转账：</strong>支持各大银行储蓄卡和信用卡，到账时间1-24小时</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-bitcoin-orange rounded-full mr-3"></span>
                      <span><strong>支付宝：</strong>实时到账，单笔限额5万元</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-bitcoin-orange rounded-full mr-3"></span>
                      <span><strong>微信支付：</strong>实时到账，单笔限额5万元</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-bitcoin-orange rounded-full mr-3"></span>
                      <span><strong>C2C交易：</strong>与其他用户直接交易，支持多种付款方式</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-blue-800 text-sm">💡 建议：首次充值建议使用银行卡或支付宝，更加安全可靠</p>
                  </div>
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-sm">
              <details className="p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-bitcoin-orange transition-colors">
                  购买比特币需要多少钱？
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  比特币可以购买小数部分，最小单位是聪（Satoshi），1个比特币=1亿聪。大多数交易所支持最低10元人民币起购买，非常适合小额投资者入门。
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm">
              <details className="p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-bitcoin-orange transition-colors">
                  购买比特币安全吗？
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  在正规交易所购买比特币是相对安全的。选择有监管牌照、用户量大、口碑好的交易所，启用双重认证，使用强密码，可以大大降低风险。
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm">
              <details className="p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-bitcoin-orange transition-colors">
                  购买后如何存储比特币？
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  比特币可以存在交易所账户（热钱包）或转移到个人钱包。长期持有建议使用硬件钱包（冷钱包）存储，更加安全。记住：掌握私钥才真正拥有比特币。
                </div>
              </details>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm">
              <details className="p-6">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-bitcoin-orange transition-colors">
                  什么时候买比特币最好？
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  没有人能准确预测最佳买入时机。建议采用定投策略（DCA），定期定额购买，可以平摊成本，降低时机选择的风险。重要的是长期持有和价值投资理念。
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
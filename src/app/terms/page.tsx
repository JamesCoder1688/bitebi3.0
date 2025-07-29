import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '网站声明 - 使用条款与免责声明 | bitebi.info',
  description: 'bitebi.info网站使用条款、免责声明和相关法律条款。请在使用本网站前仔细阅读这些重要条款。',
  keywords: '网站声明,使用条款,免责声明,法律条款,服务协议',
}

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-3xl flex items-center justify-center font-bold text-2xl shadow-lg">
              📋
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              网站声明
            </h1>
          </div>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            使用条款与免责声明
          </p>
          <p className="text-sm opacity-75">
            最后更新时间：2025年1月
          </p>
        </div>
      </section>

      {/* 内容主体 */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* 重要提示 */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-12 rounded-lg">
              <div className="flex items-start">
                <div className="text-red-500 text-2xl mr-4">⚠️</div>
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">重要风险提示</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    比特币及其他数字货币投资存在极高风险，价格波动剧烈，可能导致本金全部损失。
                    本网站提供的所有信息仅供参考，不构成投资建议。投资前请充分了解相关风险并谨慎决策。
                  </p>
                </div>
              </div>
            </div>

            {/* 网站声明内容 */}
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 网站性质与目的</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  bitebi.info（以下简称"本网站"）是一个专业的比特币信息服务平台，致力于为用户提供：
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    实时比特币价格行情信息
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    市场分析和研究报告
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    比特币相关的教育内容
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    数字货币投资知识普及
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. 免责声明</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.1 信息性质</h3>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  本网站提供的所有信息、数据、分析和观点仅供参考和教育目的，<strong>不构成任何形式的投资建议、交易建议或财务咨询</strong>。
                  用户在做出任何投资决策前，应当：
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>• 进行独立的研究和分析</li>
                  <li>• 咨询专业的财务顾问</li>
                  <li>• 充分评估自身的风险承受能力</li>
                  <li>• 了解相关法律法规要求</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.2 数据准确性</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                尽管我们努力确保本网站信息的准确性和及时性，但我们不对以下情况承担责任：
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  数据传输过程中的延迟或错误
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  第三方数据源的准确性问题
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  技术故障导致的信息不准确
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  市场异常情况下的数据异常
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.3 投资风险</h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>数字货币投资存在极高风险，包括但不限于：</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">市场风险</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 价格剧烈波动</li>
                      <li>• 流动性不足</li>
                      <li>• 市场操纵</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">技术风险</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 网络安全风险</li>
                      <li>• 技术故障</li>
                      <li>• 私钥丢失</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">监管风险</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 政策变化</li>
                      <li>• 法律限制</li>
                      <li>• 合规要求</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">其他风险</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 欺诈风险</li>
                      <li>• 税务风险</li>
                      <li>• 心理压力</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 使用条款</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.1 用户责任</h3>
              <p className="text-gray-700 leading-relaxed mb-4">使用本网站即表示您同意：</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  仅将本网站信息用于合法目的
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  不传播虚假或误导性信息
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  不进行任何可能损害网站功能的行为
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  遵守当地法律法规
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.2 内容使用</h3>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  本网站的原创内容受版权保护。用户可以：
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    个人学习和研究使用
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    非商业目的分享（需注明来源）
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    商业用途未经授权使用
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    修改或歪曲原始内容
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. 第三方链接</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                本网站可能包含指向第三方网站的链接，这些链接仅为用户提供便利。我们不对第三方网站的内容、
                隐私政策或做法承担责任。用户访问第三方网站时应当自行承担风险。
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 服务变更与终止</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                我们保留随时修改、暂停或终止本网站全部或部分服务的权利，无需事先通知。
                我们不对因服务变更或终止给用户造成的损失承担责任。
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. 适用法律</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  本声明的解释和执行适用中华人民共和国法律。如发生争议，应通过友好协商解决；
                  协商不成的，提交有管辖权的人民法院裁决。
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. 联系方式</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                如您对本声明有任何疑问或建议，请通过以下方式联系我们：
              </p>
              <div className="bg-bitcoin-orange/10 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-bitcoin-orange mr-3">📧</span>
                    邮箱：rhfty071@gmail.com
                  </li>
                  <li className="flex items-center">
                    <span className="text-bitcoin-orange mr-3">🌐</span>
                    网站：www.bitebi.info
                  </li>
                </ul>
              </div>

            </div>

            {/* 底部导航 */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/privacy" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-bitcoin-orange text-white rounded-full hover:bg-bitcoin-dark transition-colors font-medium"
                >
                  查看隐私条款
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-bitcoin-orange text-bitcoin-orange rounded-full hover:bg-bitcoin-orange hover:text-white transition-colors font-medium"
                >
                  了解关于我们
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
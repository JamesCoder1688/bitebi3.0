import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '隐私条款 - 用户隐私保护政策 | bitebi.info',
  description: 'bitebi.info隐私保护政策，详细说明我们如何收集、使用和保护用户个人信息，保障用户隐私安全。',
  keywords: '隐私条款,隐私政策,个人信息保护,数据安全,用户隐私',
}

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-3xl flex items-center justify-center font-bold text-2xl shadow-lg">
              🔒
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              隐私条款
            </h1>
          </div>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            用户隐私保护政策
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
            
            {/* 重要承诺 */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 mb-12 rounded-lg">
              <div className="flex items-start">
                <div className="text-green-500 text-2xl mr-4">🛡️</div>
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">我们的隐私承诺</h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    bitebi.info高度重视用户隐私保护，严格遵循相关法律法规，采用先进技术保障用户个人信息安全。
                    我们承诺不会将您的个人信息出售、出租或以其他方式转让给第三方。
                  </p>
                </div>
              </div>
            </div>

            {/* 隐私政策内容 */}
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 适用范围</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  本隐私政策适用于bitebi.info网站（以下简称"本网站"）提供的所有服务，包括：
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    网站浏览和信息查看服务
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    比特币价格行情数据服务
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    市场分析和教育内容服务
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    其他相关附加服务
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. 信息收集</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.1 自动收集的信息</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                当您访问本网站时，我们可能会自动收集以下技术信息：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">设备信息</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• IP地址</li>
                    <li>• 浏览器类型和版本</li>
                    <li>• 操作系统</li>
                    <li>• 设备标识符</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">访问信息</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 访问时间</li>
                    <li>• 页面访问记录</li>
                    <li>• 点击行为</li>
                    <li>• 停留时长</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.2 Cookie使用</h3>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  我们使用Cookie和类似技术来改善用户体验：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">必要Cookie</h5>
                    <p className="text-sm text-gray-600">确保网站正常功能运行</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">分析Cookie</h5>
                    <p className="text-sm text-gray-600">帮助我们了解网站使用情况</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">偏好Cookie</h5>
                    <p className="text-sm text-gray-600">记住您的个人偏好设置</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  您可以通过浏览器设置管理Cookie，但这可能影响网站的正常使用。
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.3 主动提供的信息</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                在您主动联系我们或使用特定服务时，可能需要提供：
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  联系信息（如邮箱地址）
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  反馈和建议内容
                </li>
                <li className="flex items-start">
                  <span className="text-bitcoin-orange mr-2">•</span>
                  用户偏好设置
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 信息使用</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.1 使用目的</h3>
              <p className="text-gray-700 leading-relaxed mb-4">我们收集的信息仅用于以下合法目的：</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🎯</span>
                    服务提供
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 提供个性化内容</li>
                    <li>• 优化用户体验</li>
                    <li>• 确保服务稳定性</li>
                    <li>• 技术支持和维护</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    分析改进
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 统计访问数据</li>
                    <li>• 分析用户行为</li>
                    <li>• 改进产品功能</li>
                    <li>• 开发新服务</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔒</span>
                    安全保障
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 防范安全威胁</li>
                    <li>• 检测异常行为</li>
                    <li>• 维护系统安全</li>
                    <li>• 预防欺诈行为</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📞</span>
                    沟通服务
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 回复用户咨询</li>
                    <li>• 提供客户支持</li>
                    <li>• 发送重要通知</li>
                    <li>• 处理用户反馈</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.2 数据处理原则</h3>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  我们严格遵循以下数据处理原则：
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="text-sm font-semibold text-gray-800">合法性</div>
                    <div className="text-xs text-gray-600 mt-1">依法处理</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-semibold text-gray-800">目的性</div>
                    <div className="text-xs text-gray-600 mt-1">专用目的</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📏</div>
                    <div className="text-sm font-semibold text-gray-800">最小化</div>
                    <div className="text-xs text-gray-600 mt-1">必要数据</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-sm font-semibold text-gray-800">准确性</div>
                    <div className="text-xs text-gray-600 mt-1">及时更新</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. 信息保护</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.1 技术措施</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们采用多层次的技术保护措施确保数据安全：
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-purple-500 mr-2">🔐</span>
                    传输加密
                  </h4>
                  <p className="text-sm text-gray-600">采用HTTPS/SSL加密传输</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-red-500 mr-2">🛡️</span>
                    防火墙保护
                  </h4>
                  <p className="text-sm text-gray-600">多重防火墙安全防护</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-green-500 mr-2">🔍</span>
                    访问控制
                  </h4>
                  <p className="text-sm text-gray-600">严格的权限管理制度</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-yellow-500 mr-2">📊</span>
                    监控审计
                  </h4>
                  <p className="text-sm text-gray-600">实时安全监控和审计</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-blue-500 mr-2">💾</span>
                    数据备份
                  </h4>
                  <p className="text-sm text-gray-600">定期数据备份和恢复</p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="text-indigo-500 mr-2">🚨</span>
                    应急响应
                  </h4>
                  <p className="text-sm text-gray-600">完善的应急响应机制</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.2 管理措施</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>员工培训：</strong>定期进行隐私保护和数据安全培训
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>保密协议：</strong>所有员工签署严格的保密协议
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>最小权限：</strong>实施最小权限原则，限制数据访问
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>定期审查：</strong>定期审查和更新安全措施
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 信息共享</h2>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  重要声明
                </h3>
                <p className="text-red-700 leading-relaxed">
                  我们不会出售、出租或以其他商业方式向第三方提供您的个人信息。
                  只有在以下特殊情况下，我们才可能共享您的信息：
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">法律要求</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 法律法规明确要求</li>
                    <li>• 司法机关依法要求</li>
                    <li>• 监管部门合法要求</li>
                    <li>• 国家安全需要</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">服务需要</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 技术服务提供商</li>
                    <li>• 数据分析服务商</li>
                    <li>• 云服务提供商</li>
                    <li>• 安全服务提供商</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. 用户权利</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                您对自己的个人信息享有以下权利：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="text-blue-500 mr-2">👁️</span>
                    知情权
                  </h4>
                  <p className="text-blue-700 text-sm">
                    了解我们如何收集、使用和处理您的个人信息
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <span className="text-green-500 mr-2">✏️</span>
                    更正权
                  </h4>
                  <p className="text-green-700 text-sm">
                    要求更正不准确或不完整的个人信息
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h4 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                    <span className="text-red-500 mr-2">🗑️</span>
                    删除权
                  </h4>
                  <p className="text-red-700 text-sm">
                    在特定情况下要求删除您的个人信息
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                    <span className="text-purple-500 mr-2">⏸️</span>
                    撤回权
                  </h4>
                  <p className="text-purple-700 text-sm">
                    撤回之前给予的处理个人信息的同意
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. 数据保留</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  我们仅在必要期间内保留您的个人信息：
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>自动收集信息：</strong>通常保留12个月，除非法律要求更长时间
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>主动提供信息：</strong>在服务关系存续期间及法律要求的期间内保留
                  </li>
                  <li className="flex items-start">
                    <span className="text-bitcoin-orange mr-2">•</span>
                    <strong>匿名化处理：</strong>超过保留期的数据将进行匿名化处理或安全删除
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. 政策更新</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                我们可能会适时更新本隐私政策。重大变更时，我们会通过网站公告等方式通知您。
                继续使用我们的服务即表示您接受更新后的隐私政策。
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. 联系我们</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                如您对本隐私政策有任何疑问、意见或投诉，请通过以下方式联系我们：
              </p>
              <div className="bg-bitcoin-orange/10 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-bitcoin-orange mr-3 text-xl">📧</span>
                    <div>
                      <div className="font-semibold text-gray-800">邮箱联系</div>
                      <div className="text-gray-600 text-sm">rhfty071@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-bitcoin-orange mr-3 text-xl">🌐</span>
                    <div>
                      <div className="font-semibold text-gray-800">官方网站</div>
                      <div className="text-gray-600 text-sm">www.bitebi.info</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  我们将在收到您的请求后30日内给予回复。
                </p>
              </div>

            </div>

            {/* 底部导航 */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/terms" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-bitcoin-orange text-white rounded-full hover:bg-bitcoin-dark transition-colors font-medium"
                >
                  查看网站声明
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
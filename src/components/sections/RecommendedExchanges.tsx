export default function RecommendedExchanges() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">推荐交易所</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          选择安全可靠的交易所是比特币投资的第一步。以下是我们精选的优质交易平台，为您提供安全、便捷的数字货币交易服务。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 币安 - 推荐 */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-xl relative border-2 border-bitcoin-orange">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bitcoin-orange text-white px-6 py-2 rounded-full text-sm font-bold">
              🏆 首选推荐
            </div>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">币安</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Binance</h3>
              <p className="text-gray-600">全球最大的数字货币交易所</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                全球用户超过1.8亿，交易量排名第一
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                超过350种数字货币交易对
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                7x24小时中文客服支持
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                安全可靠，获得多国合规牌照
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                低手续费，现货交易费率0.1%
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://www.marketwebb.systems/activity/referral-entry/CPA?ref=CPA_00S1M89QTY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-bitcoin-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-bitcoin-dark transition-colors transform hover:scale-105"
              >
                立即注册币安
              </a>
              <p className="text-xs text-gray-500 mt-2">
                通过专属链接注册享受手续费优惠
              </p>
            </div>
          </div>
          
          {/* OKX */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg relative border-2 border-transparent hover:border-gray-300 transition-colors">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">OKX</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">OKX</h3>
              <p className="text-gray-600">专业的数字资产交易平台</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                全球前三大数字货币交易所
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                300+数字货币交易对
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                专业的衍生品交易平台
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                多层次安全保障体系
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span>
                支持多种法币入金方式
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://www.marketwebb.systems/activity/referral-entry/CPA?ref=CPA_00S1M89QTY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors transform hover:scale-105"
              >
                注册OKX
              </a>
              <p className="text-xs text-gray-500 mt-2">
                安全可靠的数字资产交易平台
              </p>
            </div>
          </div>
        </div>
        
        {/* 安全提示 */}
        <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-start">
            <div className="text-yellow-600 mr-3 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-yellow-800 mb-2">安全提醒</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• 数字货币投资存在风险，请理性投资，不要投入超过您承受能力的资金</li>
                <li>• 注册前请确认是通过官方正版网站或APP进行操作</li>
                <li>• 务必开启双重验证(2FA)以保障账户安全</li>
                <li>• 不要将私钥或助记词告诉任何人</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
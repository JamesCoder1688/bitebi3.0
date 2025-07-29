export default function InvestmentCallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-bitcoin-orange rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-bitcoin-orange rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-bitcoin-orange rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* 主标题 */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            现在是投资比特币的好时机
          </h2>
          
          {/* 副标题 */}
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            基于当前市场走势分析，选择安全可靠的交易平台开始您的投资之旅
          </p>
          
          {/* 引导语 */}
          <div className="bg-gradient-to-r from-bitcoin-orange/20 to-bitcoin-light/20 rounded-2xl p-8 border border-bitcoin-orange/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-medium">技术指标向好</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-blue-400 font-medium">机构持续买入</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-purple-400 font-medium">市场情绪积极</span>
              </div>
            </div>
            
            <p className="text-lg font-semibold text-bitcoin-orange mb-2">
              💎 精选优质交易平台，助您安全投资
            </p>
            <p className="text-gray-300">
              严格筛选全球知名交易所，为您提供安全、便捷的比特币投资服务
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
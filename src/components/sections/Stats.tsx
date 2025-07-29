export default function Stats() {
  return (
    <section className="responsive-spacing bg-white">
      <div className="container">
        <h2 className="responsive-title text-center mb-8 sm:mb-12 text-gray-900">比特币核心数据</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-bitcoin-orange">2100万</h3>
            <p className="text-lg sm:text-xl text-gray-900 mb-2 font-semibold">比特币总量</p>
            <span className="text-xs sm:text-sm text-gray-600">永远不会增发</span>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-bitcoin-orange">10分钟</h3>
            <p className="text-lg sm:text-xl text-gray-900 mb-2 font-semibold">平均出块时间</p>
            <span className="text-xs sm:text-sm text-gray-600">全网算力维护</span>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-bitcoin-orange">2009年</h3>
            <p className="text-lg sm:text-xl text-gray-900 mb-2 font-semibold">比特币诞生</p>
            <span className="text-xs sm:text-sm text-gray-600">15年稳定运行</span>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-bitcoin-orange">99.98%</h3>
            <p className="text-lg sm:text-xl text-gray-900 mb-2 font-semibold">网络正常运行时间</p>
            <span className="text-xs sm:text-sm text-gray-600">从未停机</span>
          </div>
        </div>
      </div>
    </section>
  )
}
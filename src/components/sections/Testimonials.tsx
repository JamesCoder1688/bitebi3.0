export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">用户评价</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl text-bitcoin-orange mb-4">★★★★★</div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">
              "这里的比特币价格信息很准确，交易所推荐也很靠谱，帮助我选择了合适的平台开始投资。"
            </p>
            <div className="font-bold text-gray-900">- 创业者 A</div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl text-bitcoin-orange mb-4">★★★★★</div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">
              "比特币知识讲解很全面，从入门到进阶都有，让我对数字货币有了更深的了解。"
            </p>
            <div className="font-bold text-gray-900">- 金融从业者 B</div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl text-bitcoin-orange mb-4">★★★★★</div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">
              "实时价格走势图很专业，市场分析也很到位，是我每天必看的比特币资讯网站。"
            </p>
            <div className="font-bold text-gray-900">- 投资者 C</div>
          </div>
        </div>
      </div>
    </section>
  )
}
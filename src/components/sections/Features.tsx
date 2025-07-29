'use client'

import { useState } from 'react'

const features = [
  {
    id: 1,
    icon: '🔒',
    title: '安全可靠',
    description: '采用SHA-256加密算法和区块链技术，每笔交易都经过全网验证，确保资产安全不可篡改。',
    details: ['SHA-256加密算法', '去中心化验证', '不可篡改账本', '多重签名保护'],
    color: 'from-red-500 to-red-600'
  },
  {
    id: 2,
    icon: '🌍',
    title: '全球通用',
    description: '无国界限制，24小时全球流通，可在世界任何地方进行快速转账和支付。',
    details: ['24/7全球交易', '跨境无限制', '即时到账', '全球接受度高'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 3,
    icon: '⚡',
    title: '交易迅速',
    description: '点对点直接交易，无需通过银行等中介机构，交易确认时间平均10分钟。',
    details: ['点对点交易', '无中介费用', '10分钟确认', '闪电网络支持'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 4,
    icon: '💰',
    title: '低手续费',
    description: '相比传统银行转账和汇款，比特币交易手续费极低，节省大量转账成本。',
    details: ['极低手续费', '无隐藏费用', '透明收费', '节省成本'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 5,
    icon: '🏛️',
    title: '去中心化',
    description: '不受任何政府或机构控制，由全球节点网络维护，真正实现货币自由。',
    details: ['无政府控制', '节点网络维护', '开源透明', '货币自由'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 6,
    icon: '📈',
    title: '投资价值',
    description: '总量恒定2100万枚，具有天然通胀对冲属性，被誉为"数字黄金"。',
    details: ['总量恒定2100万', '抗通胀资产', '数字黄金', '长期升值潜力'],
    color: 'from-bitcoin-orange to-bitcoin-light'
  }
]

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="bitcoin-features" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7931a%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            比特币的特点
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            比特币作为世界首个去中心化数字货币，拥有传统货币无法比拟的独特优势
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-3 ${
                hoveredCard === feature.id ? 'scale-105' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setExpandedCard(expandedCard === feature.id ? null : feature.id)}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
                  {feature.description}
                </p>

                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === feature.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">核心优势：</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mr-3`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${feature.color} transform group-hover:w-16 transition-all duration-300`}></div>
                  <button className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        expandedCard === feature.id ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-medium text-gray-700">实时更新的比特币技术优势</span>
          </div>
        </div>
      </div>
    </section>
  )
}
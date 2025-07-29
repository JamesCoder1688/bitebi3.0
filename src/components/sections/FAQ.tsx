'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "什么是比特币？",
      answer: "比特币是一种基于区块链技术的数字货币，由中本聪在2009年创造。它是世界上第一种去中心化的数字货币，不受任何政府或机构控制，通过密码学技术确保交易安全，总量限定为2100万枚。"
    },
    {
      question: "如何选择安全的比特币交易所？",
      answer: "选择交易所时应考虑以下因素：1）平台的合规性和监管牌照；2）用户资金安全保障措施；3）交易手续费和提现费用；4）客服服务质量；5）用户评价和市场声誉。我们推荐币安和OKX等知名交易所。"
    },
    {
      question: "投资比特币有什么风险？",
      answer: "比特币投资存在以下风险：1）价格波动风险，比特币价格可能大幅上涨或下跌；2）技术风险，如私钥丢失、交易所被黑客攻击；3）政策风险，各国监管政策可能影响价格；4）市场风险，流动性不足可能影响交易。请谨慎投资，不要投入超过承受能力的资金。"
    },
    {
      question: "如何保护数字资产安全？",
      answer: "保护数字资产的建议：1）使用硬件钱包存储大额比特币；2）开启交易所的双重身份验证(2FA)；3）定期备份钱包私钥或助记词；4）不要在不安全的网络环境下进行交易；5）警惕钓鱼网站和诈骗信息。"
    },
    {
      question: "比特币价格为什么波动这么大？",
      answer: "比特币价格波动的主要原因：1）市场规模相对较小，容易受大额交易影响；2）24小时全球交易，没有涨跌停限制；3）投资者情绪和市场预期变化；4）宏观经济事件和政策消息；5）技术发展和应用场景变化。这种波动性既带来投资机会，也增加了风险。"
    }
  ]

  return (
    <section className="responsive-spacing bg-white">
      <div className="container">
        <h2 className="responsive-title text-center mb-8 sm:mb-12 text-gray-900">常见问题</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden">
              <button
                className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-xl sm:text-2xl text-bitcoin-orange transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
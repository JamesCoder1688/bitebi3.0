export default function WhatIsBitcoin() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">比特币是什么</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              比特币（Bitcoin，BTC）是世界上第一种去中心化的数字货币，由神秘的中本聪在2009年创造。它基于区块链技术，无需银行或政府等中央机构即可实现点对点的价值传输。
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              比特币采用先进的密码学技术确保交易安全，总量限定为2100万枚，具有稀缺性和通胀对冲特性。作为"数字黄金"，比特币已成为全球投资者的重要资产配置选择。
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              我们为您提供专业的比特币信息服务和交易所评测，帮助您选择最适合的平台安全投资，享受优质的数字货币服务体验。
            </p>
          </div>
          <div className="text-center">
            <div className="w-52 h-52 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-8xl font-bold text-white">₿</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
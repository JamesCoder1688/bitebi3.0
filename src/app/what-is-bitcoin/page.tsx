import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '比特币是什么 - 比特币入门指南 - 数字货币基础知识 | bitebi.info',
  description: '全面介绍比特币是什么，比特币的工作原理、特点和价值。从零开始了解这个革命性的数字货币和区块链技术。',
  keywords: '比特币是什么,比特币介绍,数字货币,区块链,加密货币,去中心化,比特币原理',
}

export default function WhatIsBitcoin() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                比特币是什么？
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                比特币（Bitcoin）是世界上第一种去中心化的数字货币，由神秘的中本聪在2009年创造。它基于区块链技术，无需银行或政府等中央机构即可实现点对点的价值传输。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#detailed-intro" className="btn btn-primary">
                  深入了解
                </a>
                <Link href="/buy-bitcoin" className="btn btn-secondary">
                  立即购买
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-8xl font-bold text-white">₿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比特币基本概念 */}
      <section id="detailed-intro" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            比特币基本概念
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">数字黄金</h3>
                <p className="text-gray-600 leading-relaxed">
                  比特币被称为"数字黄金"，因为它具有稀缺性（总量恒定2100万枚）、耐久性和价值存储功能。与传统货币不同，比特币不会因为政府印钞而贬值。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">去中心化</h3>
                <p className="text-gray-600 leading-relaxed">
                  比特币网络没有中央控制机构，由全球数千个节点维护。这意味着没有任何政府、银行或公司能够控制或关闭比特币网络。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">点对点交易</h3>
                <p className="text-gray-600 leading-relaxed">
                  用户可以直接向世界任何地方的其他用户发送比特币，无需通过银行或其他中介机构，交易费用低廉且速度快。
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-light/10 p-8 rounded-3xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">比特币关键数据</h4>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bitcoin-orange mb-2">2100万</div>
                  <div className="text-gray-600">总量上限</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bitcoin-orange mb-2">2009年</div>
                  <div className="text-gray-600">诞生年份</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bitcoin-orange mb-2">10分钟</div>
                  <div className="text-gray-600">出块时间</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bitcoin-orange mb-2">99.98%</div>
                  <div className="text-gray-600">正常运行时间</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 比特币工作原理 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            比特币如何工作
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-6xl mb-6">🔗</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">区块链技术</h3>
              <p className="text-gray-600 leading-relaxed">
                每笔比特币交易都被记录在区块链上，这是一个不可篡改的公共账本。区块链由连续的区块组成，每个区块包含多笔交易记录。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-6xl mb-6">⛏️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">挖矿验证</h3>
              <p className="text-gray-600 leading-relaxed">
                矿工通过解决复杂的数学问题来验证交易并创建新的区块。这个过程叫做"挖矿"，成功的矿工会获得比特币奖励。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-6xl mb-6">🔐</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">密码学保护</h3>
              <p className="text-gray-600 leading-relaxed">
                比特币使用先进的密码学技术确保交易安全。每个用户都有一对密钥：公钥用于接收比特币，私钥用于发送比特币。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 比特币的特点 */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            比特币的独特特点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">安全可靠</h3>
              <p className="text-gray-600 leading-relaxed">
                采用SHA-256加密算法和区块链技术，每笔交易都经过全网验证，确保资产安全不可篡改。
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">全球通用</h3>
              <p className="text-gray-600 leading-relaxed">
                无国界限制，24小时全球流通，可在世界任何地方进行快速转账和支付。
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">交易迅速</h3>
              <p className="text-gray-600 leading-relaxed">
                点对点直接交易，无需通过银行等中介机构，交易确认时间平均10分钟。
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">低手续费</h3>
              <p className="text-gray-600 leading-relaxed">
                相比传统银行转账和汇款，比特币交易手续费极低，节省大量转账成本。
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">去中心化</h3>
              <p className="text-gray-600 leading-relaxed">
                不受任何政府或机构控制，由全球节点网络维护，真正实现货币自由。
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">投资价值</h3>
              <p className="text-gray-600 leading-relaxed">
                总量恒定2100万枚，具有天然通胀对冲属性，被誉为"数字黄金"。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 比特币历史 */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            比特币发展历程
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-bitcoin-orange">2008年</div>
                </div>
                <div className="flex-grow border-l-4 border-bitcoin-orange pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">比特币白皮书发布</h3>
                  <p className="text-gray-600 leading-relaxed">
                    中本聪发布《比特币：一种点对点的电子现金系统》白皮书，首次提出比特币概念。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-bitcoin-orange">2009年</div>
                </div>
                <div className="flex-grow border-l-4 border-bitcoin-orange pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">比特币网络启动</h3>
                  <p className="text-gray-600 leading-relaxed">
                    比特币网络正式启动，中本聪挖出第一个比特币区块（创世区块）。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-bitcoin-orange">2010年</div>
                </div>
                <div className="flex-grow border-l-4 border-bitcoin-orange pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">首次商业交易</h3>
                  <p className="text-gray-600 leading-relaxed">
                    程序员Laszlo用10000个比特币购买了两个披萨，这是比特币首次用于商业交易。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-bitcoin-orange">2017年</div>
                </div>
                <div className="flex-grow border-l-4 border-bitcoin-orange pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">价格突破2万美元</h3>
                  <p className="text-gray-600 leading-relaxed">
                    比特币价格首次突破2万美元大关，引起全球广泛关注，加密货币进入主流视野。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="text-2xl font-bold text-bitcoin-orange">2021年</div>
                </div>
                <div className="flex-grow border-l-4 border-bitcoin-orange pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">机构大规模采用</h3>
                  <p className="text-gray-600 leading-relaxed">
                    特斯拉、微策略等知名公司将比特币加入资产负债表，比特币价格创下历史新高。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见误解 */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            关于比特币的常见误解
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">❌</div>
                <h3 className="text-xl font-bold text-red-800">误解：比特币是匿名的</h3>
              </div>
              <p className="text-red-700 leading-relaxed">
                <strong>真相：</strong>比特币是伪匿名的。所有交易都记录在公开的区块链上，可以通过地址追踪交易历史。
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">❌</div>
                <h3 className="text-xl font-bold text-red-800">误解：比特币没有实际价值</h3>
              </div>
              <p className="text-red-700 leading-relaxed">
                <strong>真相：</strong>比特币的价值来源于其稀缺性、实用性、网络效应和作为价值存储的功能。
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">❌</div>
                <h3 className="text-xl font-bold text-red-800">误解：比特币主要用于犯罪</h3>
              </div>
              <p className="text-red-700 leading-relaxed">
                <strong>真相：</strong>研究显示，比特币用于非法活动的比例不到1%，远低于传统现金。
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">❌</div>
                <h3 className="text-xl font-bold text-red-800">误解：比特币浪费能源</h3>
              </div>
              <p className="text-red-700 leading-relaxed">
                <strong>真相：</strong>比特币挖矿消耗的能源大部分来自可再生能源，且能源消耗是维护网络安全的必要成本。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            准备开始比特币之旅？
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            现在您已经了解了比特币的基本知识，是时候开始您的数字货币投资之旅了。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/buy-bitcoin" className="btn bg-white text-bitcoin-orange hover:bg-gray-100">
              学习如何购买
            </Link>
            <Link href="/bitcoin-price" className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-bitcoin-orange">
              查看实时价格
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
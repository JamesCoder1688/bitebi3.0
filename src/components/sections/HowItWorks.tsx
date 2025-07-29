export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "注册账户",
      description: "选择可信的交易所注册账户，提供手机号和邮箱，完成身份验证，整个过程安全便捷。",
      actionText: "选择交易所",
      actionLink: "/buy-bitcoin#exchanges",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: 2,
      title: "充值资金",
      description: "支持银行卡、支付宝、微信等多种充值方式，资金通过银行级安全保障。",
      actionText: "查看充值方式",
      actionLink: "/buy-bitcoin#funding",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: 3,
      title: "购买比特币",
      description: "选择购买数量，确认当前市场价格，一键下单即可完成比特币购买。",
      actionText: "查看价格",
      actionLink: "/bitcoin-price",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029C10.792 13.807 10.304 14 10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: 4,
      title: "安全存储",
      description: "比特币存入交易所安全钱包，建议提现到个人硬件钱包，资产完全由您掌控。",
      actionText: "了解安全",
      actionLink: "/buy-bitcoin#security",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f7931a%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            比特币怎么买
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            简单四步，轻松开始您的比特币投资之旅
          </p>
        </div>

        {/* Desktop Flow Line */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">
          <div className="flex items-center space-x-8">
            <div className="w-32 h-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light opacity-30"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light opacity-30"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-bitcoin-orange to-bitcoin-light opacity-30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group text-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange to-bitcoin-light text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Hover Action */}
                <a 
                  href={step.actionLink}
                  className="inline-flex items-center text-bitcoin-orange font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-bitcoin-dark"
                >
                  <span className="mr-2">{step.actionText}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-bitcoin-orange/10 to-bitcoin-light/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-bitcoin-orange/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              准备开始购买比特币？
            </h3>
            <p className="text-gray-600 mb-6">
              选择信誉良好的交易平台，享受专业的服务和优惠费率
            </p>
            <a 
              href="/buy-bitcoin" 
              className="inline-flex items-center bg-gradient-to-r from-bitcoin-orange to-bitcoin-light text-white px-8 py-4 rounded-2xl font-bold hover:from-bitcoin-light hover:to-bitcoin-orange transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">查看详细指南</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
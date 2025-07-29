import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 性能优化配置
  compress: true,
  poweredByHeader: false,
  
  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 静态导出配置
  output: 'export',
  trailingSlash: true,
  
  // 图片优化 - 静态导出时禁用优化
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

export default nextConfig
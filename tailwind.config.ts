import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bitcoin-orange': '#f7931a',
        'bitcoin-light': '#ff9500',
        'bitcoin-dark': '#e6830f',
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Hiragino Sans GB', 
          'Microsoft YaHei',
          '微软雅黑',
          'Segoe UI',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}
export default config
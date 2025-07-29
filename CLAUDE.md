# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Bitcoin information and trading website (`bitebi.info`) now built with Next.js 14. The project provides Bitcoin price information, trading guidance, and educational content for Chinese-speaking users.

## Architecture & Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Bitcoin theme colors
- **Language**: TypeScript
- **Target Audience**: Chinese-speaking Bitcoin investors and traders
- **Deployment**: Static site generation (SSG)

## File Structure

```
bitebi-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx (Root layout with Header/Footer)
│   │   ├── page.tsx (Homepage)
│   │   ├── buy-bitcoin/page.tsx (Purchase guide)
│   │   ├── what-is-bitcoin/page.tsx (Bitcoin education)
│   │   ├── bitcoin-price/page.tsx (Price analysis)
│   │   └── blog/page.tsx (Blog section)
│   └── components/
│       ├── layout/ (Header, Footer, Navigation)
│       └── sections/ (Homepage sections)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Key Features

1. **Bitcoin Price Display**: Real-time price simulation with USD/CNY conversion
2. **Interactive Price Chart**: Canvas-based price chart with multiple time periods
3. **Market Trends**: Dynamic trend cards showing price movements
4. **Educational Content**: Comprehensive Bitcoin explanation and buying guides
5. **Responsive Design**: Mobile-friendly layout with responsive breakpoints
6. **FAQ Section**: Interactive FAQ with expandable answers
7. **Affiliate Links**: Exchange referral links for monetization

## Affiliate Links Configuration

### Current Setup
The `/buy-bitcoin` page includes affiliate/referral links for cryptocurrency exchanges:

- **Binance**: `https://www.binance.com/register?ref=DEMO123456`
- **OKX**: `https://www.okx.com/join/DEMO789`
- **Huobi**: Currently disabled (shows "即将上线")

### Updating Affiliate Links
To update with real referral codes:

1. **Binance**: Replace `DEMO123456` with actual referral code
2. **OKX**: Replace `DEMO789` with actual referral code
3. **Huobi**: Remove `disabled` attribute and add real link when available

### File Location
- File: `src/app/buy-bitcoin/page.tsx`
- Lines: Search for `href="https://www.binance.com/register?ref=` and `href="https://www.okx.com/join/`

### Link Properties
- All links open in new tab (`target="_blank"`)
- Security attributes included (`rel="noopener noreferrer"`)
- Styled as primary buttons with consistent design

## Development Guidelines

### Component Structure
- Page components in `src/app/*/page.tsx`
- Shared components in `src/components/`
- Layout components (Header/Footer) wrap all pages
- Section components for homepage content blocks

### Styling System
- Tailwind CSS for utility-first styling
- Custom Bitcoin theme colors in `tailwind.config.ts`:
  - `bitcoin-orange`: #f7931a
  - `bitcoin-light`: #ff9500
  - `bitcoin-dark`: #e6830f
- Responsive design with Tailwind breakpoints
- Dark hero sections with gradient backgrounds for consistency

### Content Guidelines
- All user-facing content in Simplified Chinese  
- SEO-optimized with Next.js metadata API
- Bitcoin-focused keywords and terminology
- Professional tone for financial content

### Common Development Tasks

1. **Add New Page**: Create `src/app/[slug]/page.tsx` with metadata export
2. **Update Navigation**: Modify `src/components/layout/Header.tsx`
3. **Style Changes**: Use Tailwind classes or extend `tailwind.config.ts`
4. **Content Updates**: Edit JSX directly in page components
5. **Build & Deploy**: Run `npm run build` for production build

## Development Commands

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## SEO & Metadata

Each page includes:
- Custom title and description
- Open Graph tags for social sharing
- Structured data (JSON-LD) for search engines
- Canonical URLs and proper meta tags

## Important Notes

- Built with Next.js 14 App Router (not Pages Router)
- Uses Tailwind CSS for styling (not embedded CSS)
- TypeScript for type safety
- Price data is simulated (not connected to real APIs)
- Mobile-first responsive design approach
- Chinese language content with Bitcoin terminology
- Canvas-based charting without external chart libraries
- Static site generation for optimal performance
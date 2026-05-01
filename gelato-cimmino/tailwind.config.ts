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
        // Real Gelato Cimmino brand colors
        brand: '#4A8DB5',         // primary steel blue (from logo background)
        'brand-light': '#A3C4DC', // powder blue (C-wreath color)
        'brand-dark': '#2E6A8F',  // deeper blue for hover states
        'brand-pale': '#EAF2F8',  // very light blue for section backgrounds
        // Neutrals
        cream: '#FAFBFC',
        'off-white': '#F5F7F9',
        charcoal: '#1C1C1C',
        'charcoal-mid': '#3D3D3D',
        'charcoal-light': '#6B6B6B',
        // Legacy (used in testimonials blush bg only)
        blush: '#F2D5C0',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      lineHeight: {
        body: '1.7',
      },
    },
  },
  plugins: [],
}

export default config

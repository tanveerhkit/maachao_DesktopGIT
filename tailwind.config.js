/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF6B00',
        'brand-black': '#181818',
        'brand-gray': '#F7F7F7',
        'brand-pink': '#FFD6E7',
        'brand-yellow': '#FFF6CC',
        'brand-lavender': '#E6E6FF',
        'brand-mint': '#D6FFF6',
        'brand-blue': '#D6ECFF',
        'brand-white': '#FFFFFF',
        'brand-cream': '#FFF9F3',
      },
      animation: {
        'pulse-icon': 'pulse-icon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-icon': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
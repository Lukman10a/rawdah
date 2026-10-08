/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#123C32',
        forestDark: '#0B2922',
        ivory: '#FAF8F2',
        sage: '#E8F0EA',
        gold: '#C9A45C',
        charcoal: '#17211E',
        cta: '#176B4D',
        ctaHover: '#145A41',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-amiri)', 'serif'],
      },
      borderRadius: {
        card: '20px',
        cardLg: '24px',
        btn: '14px',
      },
      boxShadow: {
        soft: '0 8px 32px rgba(18,60,50,0.06)',
        softLg: '0 16px 48px rgba(18,60,50,0.09)',
        card: '0 4px 24px rgba(18,60,50,0.07)',
      },
      maxWidth: {
        content: '1220px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

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
        saffron: {
          50:  '#fff8f0',
          100: '#ffe8cc',
          200: '#ffd099',
          300: '#ffb366',
          400: '#ff9533',
          500: '#f5a623',
          600: '#e8940f',
          700: '#c47c0a',
          800: '#a06408',
          900: '#7c4d06',
        },
        vermillion: {
          50:  '#fff2ec',
          100: '#ffdece',
          200: '#fbb99a',
          300: '#f89166',
          400: '#f46832',
          500: '#D4500A',
          600: '#b84208',
          700: '#963506',
          800: '#742905',
          900: '#521d03',
        },
        sacred: {
          dark:   '#1A0A00',
          brown:  '#7C3900',
          cream:  '#FFF8F0',
          light:  '#FFF3E0',
          gold:   '#F5A623',
          lotus:  '#D4500A',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-sacred': 'linear-gradient(135deg, #1A0A00 0%, #3d1a00 50%, #7C3900 100%)',
        'gradient-warm':   'linear-gradient(135deg, #FFF8F0 0%, #FFE8CC 100%)',
        'gradient-gold':   'linear-gradient(135deg, #F5A623 0%, #D4500A 100%)',
        'gradient-hero':   'linear-gradient(180deg, rgba(26,10,0,0.7) 0%, rgba(26,10,0,0.4) 60%, rgba(26,10,0,0.8) 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 4s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'spin-slow':  'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245,166,35,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(245,166,35,0.7)' },
        },
      },
      boxShadow: {
        'sacred': '0 10px 40px rgba(212,80,10,0.2)',
        'gold':   '0 10px 40px rgba(245,166,35,0.3)',
        'glow':   '0 0 30px rgba(245,166,35,0.5)',
        'card':   '0 4px 24px rgba(26,10,0,0.12)',
      },
    },
  },
  plugins: [],
};

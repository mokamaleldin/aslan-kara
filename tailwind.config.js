/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinema: {
          950: '#0B0D10',
          black: '#101217',
          charcoal: '#17191F',
          panel: '#24272D',
          surface: '#1E2127',
          border: '#373A40',
          muted: '#A4A6AB',
          white: '#F5F4EF',
        },
        lime: {
          accent: '#D9FF43',
          glow: 'rgba(217, 255, 67, 0.15)',
        },
        coral: {
          accent: '#FF6548',
          glow: 'rgba(255, 101, 72, 0.2)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        arabic: ['"Alexandria"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        'arabic-body': ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      letterSpacing: {
        'cinema': '0.25em',
        'wide-editorial': '0.15em',
      },
      animation: {
        'pulse-rec': 'pulseRec 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        pulseRec: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.92)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

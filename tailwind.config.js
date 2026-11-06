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
        midnight: {
          bg: 'var(--bg-primary)',
          card: 'var(--bg-secondary)',
          surface: 'var(--bg-surface)',
          border: 'var(--border-color)',
          subtle: 'var(--border-color)',
          glow: 'var(--border-glow)',
        },
        accent: {
          blue: 'var(--accent-blue)',
          cyan: 'var(--accent-cyan)',
          hover: 'var(--accent-hover)',
          emerald: '#10B981',
          indigo: '#6366F1',
        },
        tech: {
          slate: 'var(--text-secondary)',
          light: 'var(--text-primary)',
          dark: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

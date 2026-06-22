/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#3B82F6',
        dark: 'rgb(var(--color-dark-rgb) / <alpha-value>)',
        card: 'rgb(var(--color-card-rgb) / <alpha-value>)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        'muted-light': 'var(--color-muted-light)',
        border: 'var(--color-border)',
        hover: 'var(--color-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

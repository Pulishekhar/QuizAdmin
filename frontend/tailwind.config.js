/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'casino-dark': '#0e0e0e',
        'casino-light': '#1a1a1a',
        'casino-gold': '#d4af37',
        'casino-green': '#15803d',
        'casino-red': '#dc2626',
      },
    },
  },
  plugins: [],
}
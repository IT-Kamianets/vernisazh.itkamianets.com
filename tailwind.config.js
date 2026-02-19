/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FDFCF0',
        'deep-slate': '#2D2D2D',
        'gold': '#D4AF37',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


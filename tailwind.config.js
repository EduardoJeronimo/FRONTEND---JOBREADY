/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#5e81f4', 
        'brand-bg': '#f5f7ff',
        'brand-dark': '#2d3748',
      },
    },
  },
  plugins: [],
}
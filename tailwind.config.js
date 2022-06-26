/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#7fa3eb',
          200: '#4d82eb',
          300: '#1a5ad9',
          400: '#092f7d',
        }
      }
    },
  },
  plugins: [],
}

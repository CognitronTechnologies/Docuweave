/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif'],
      },
      colors: {
        primary: "#6f47ff",
        accent: "#16e0d3",
        dark: "#182033",
        light: "#f7f8fa"
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(60,72,88,0.10)',
        'card': '0 1px 6px 0 rgba(60,72,88,0.12)'
      }
    }
  },
  plugins: [],
}
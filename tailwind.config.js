/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2234", // Light navy blue
          light: "#2a3348", // Lighter shade of navy
          dark: "#0f1929" // Darker shade of navy
        },
        white: {
          DEFAULT: "#ffffff",
          muted: "#f5f5f5"
        },
        accent: "#4f46e5", // Purple accent color
        primary: "#1e40af", // Blue primary color
        dark: "#101624" // Dark background color
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Poppins", "sans-serif"]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '1rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Light mode by default
  theme: {
    extend: {
      colors: {
        // Light theme color scheme
        light: {
          DEFAULT: "#ffffff", // White - main background
          secondary: "#f8fafc", // Slate-50 - secondary background  
          tertiary: "#f1f5f9", // Slate-100 - tertiary background
          50: "#ffffff",
          100: "#f8fafc",
          200: "#f1f5f9"
        },
        primary: "#1e40af", // Blue-700 - professional blue
        accent: "#6366f1", // Indigo-500 - modern purple accent
        secondary: "#64748b", // Slate-500 - secondary text
        white: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc" // Slate-50
        },
        // Light theme backgrounds and text
        bg: {
          primary: "#ffffff",
          secondary: "#f8fafc"
        },
        text: {
          primary: "#000000", // Pure black for primary text
          secondary: "#1a1a1a" // Very dark gray for secondary text
        },
        border: {
          DEFAULT: "#e2e8f0" // Slate-200 - light borders
        }
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "Arial", "sans-serif"],
        heading: ["DM Sans", "Poppins", "Inter", "sans-serif"]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
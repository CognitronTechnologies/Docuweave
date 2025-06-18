/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Always use dark mode
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1e293b", // Slate-800 - main navy
          light: "#334155", // Slate-700 - lighter navy  
          dark: "#0f172a", // Slate-900 - darker navy
          50: "#1e293b",
          100: "#1e293b",
          200: "#1e293b"
        },
        primary: "#1e40af", // Blue-700 - professional blue
        accent: "#6366f1", // Indigo-500 - modern purple accent
        dark: "#0A1F44", // Deep navy background
        white: {
          DEFAULT: "#ffffff",
          muted: "#f1f5f9" // Slate-100
        },
        // Only dark theme backgrounds and text
        bg: {
          primary: "#0A1F44",
          secondary: "#0f172a"
        },
        text: {
          primary: "#f8fafc",
          secondary: "#cbd5e1"
        },
        border: {
          DEFAULT: "#475569"
        }
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Poppins", "Inter", "Arial", "sans-serif"]
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
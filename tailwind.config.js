/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {      colors: {
        navy: {
          DEFAULT: "#1e293b", // Slate-800 - main navy
          light: "#334155", // Slate-700 - lighter navy  
          dark: "#0f172a", // Slate-900 - darker navy
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0"
        },
        primary: "#1e40af", // Blue-700 - professional blue
        accent: "#6366f1", // Indigo-500 - modern purple accent
        light: "#f8fafc", // Slate-50 - very light background
        dark: "#1e293b", // Slate-800 - dark text/backgrounds
        white: {
          DEFAULT: "#ffffff",
          muted: "#f1f5f9" // Slate-100
        },
        // Theme-aware background and text colors
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)"
        },
        border: {
          DEFAULT: "var(--border-color)"
        }
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
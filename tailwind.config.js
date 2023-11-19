/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/banner.svg')",
        'error-pattern': "url('./src/assets/images/error.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
}


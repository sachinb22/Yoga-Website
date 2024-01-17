/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D53FF",
        secondary: "#111315"
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '3rem',
          sm: '1rem',

        }
      }
    },
  },
  plugins: [],
}


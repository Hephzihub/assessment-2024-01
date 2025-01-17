/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#5b21b6',
      },
      fontFamily: {
        'sans': ['Poppins'],
      }
    },
  },
  plugins: [],
}


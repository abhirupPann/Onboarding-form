/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "reck" : ["Reckless TRIAL Medium", "sans serif"]
       }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        mont: ["Montserrat", "sans-serif"],
        gilroy: ["gilroy"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


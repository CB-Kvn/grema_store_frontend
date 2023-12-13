/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
   
    colors:{
      'nav':'#F6DAEF',
      'font-nav':'#393939',
      'principal':'#FFBF8',
      'footer':"#C2A78D"
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}


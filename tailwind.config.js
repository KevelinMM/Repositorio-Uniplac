/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily:{
      body:['Rubik']
    },
    extend: {
      colors:{
        'primary-dark':'#2d333b',
        'primary-white':'#f3f4f6',
        'btn-blue':'#1e40afe6',

      }
    },
  },
  plugins: [],
}
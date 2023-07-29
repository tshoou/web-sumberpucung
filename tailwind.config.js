/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  theme: {
    colors: {
      'primary' : '#6E85B7',
      '2' : '#B2C8DF',
      '3' : '#C4D7E0',
      '4' :'#F8F9D7',
    },
    extend: {
      
    },
  },
  plugins: [],
}
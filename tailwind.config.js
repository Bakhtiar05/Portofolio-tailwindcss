/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary : "#f59e0b",
        dark: "#78350f",
      },
      screens : {
        '2xl' : '1320'
      }
    },
  },
  plugins: [],
}


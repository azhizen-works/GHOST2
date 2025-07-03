/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        CedarvilleCursive:["Cedarville Cursive", 'cursive'],
        Volkhov:["Volkhov", 'serif'],
        GentiumBookPlus:["Gentium Book Plus", 'serif'],
        Felipa:["Felipa", 'serif']
      }
    },
  },
  plugins: [],
}
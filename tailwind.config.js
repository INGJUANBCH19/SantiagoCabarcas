/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: '100vh',
      },
      colors: {
        primary: '#222831',
        secondary: '#37414f',
        accent: '#DBC078',
        light: '#e6d3a0'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      backgroundImage: {
        'bg-shorten-mobile': "url('/public/images/bg-shorten-mobile.svg')",
        'bg-shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
      }
    },
  },
  plugins: [],
}
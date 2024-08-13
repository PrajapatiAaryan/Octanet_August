/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/bg1.jpg')",
        'hero-pattern2': "url('./assets/bg2.webp')",
        'hero-pattern3': "url('./assets/bg3.jpg')",
      }
    },
  },
  plugins: [],
}
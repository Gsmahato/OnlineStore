/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        customBackground: '#F0F4F8',
        primary: '#6A1B9A',
        secondary: '#F8F9FA',
        accent: '#FFD700',
        dark: '#343A40',
        light: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
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
      boxShadow: {
        'custom': '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      colors: {
        customBackground: '#F0F4F8',
        primary: '#6A1B9A',
        secondary: '#F8F9FA',
        accent: '#FFD700',
        dark: '#343A40',
        light: '#FFFFFF',
        customGray:'#424242',
        borderColor:'#e2e2e2',
        textColor:'#212121',
      },
    },
  },
  plugins: [],
}
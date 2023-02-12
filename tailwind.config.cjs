/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        10: '#A9C1FF',
        100: '#0A74DC',
        200: '#031434'
      },
      grey: {
        10: '#A4A7B7',
        100: '#B0B9C8',
        200: '#E5E5E5',
        300: '#C4C4C4',
        400: '#303B54',
        500: '#434854',
        600: '#737373'
      },
      success: {
        100: '#00992B',
        50: '#A9FFE0'
      },
      pink: '#FFA9EC',
      error: '#DC2626',
      warning: '#FDFFA9',
      dark: '#0B2253',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

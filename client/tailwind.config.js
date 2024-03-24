/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#131D28',
      'white': '#ffffff',
      'red': '#FC683E',
      'light': '#FFF1F1',
      'gray': '#F1F0F0',

    },
    extend: {
      fontFamily: {
        lobster: ['"Lobster", sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
}
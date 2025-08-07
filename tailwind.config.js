const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode with class (e.g. <html class="dark">
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{json,md}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9faf5',
          100: '#f3f6e6',
          200: '#e6edc5',
          300: '#d7e3a1',
          400: '#c0d573',
          500: '#a8c849', // yellowish green
          600: '#8fa81f',
          700: '#758912',
          800: '#55690c',
          900: '#3b4808',
        },
        accent: {
          50: '#e6fafa',
          100: '#c3f2f3',
          200: '#95e5e6',
          300: '#61d2d4',
          400: '#2ab7be',
          500: '#09919b', // teal
          600: '#06757c',
          700: '#045e63',
          800: '#03464b',
          900: '#023237',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'bonheur-royale': ['Bonheur Royale', 'cursive'],
        'dongle': ['Dongle', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./webrings/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        mustard: {
          100: '#FFF8E7',
          500: '#D4A017',
        },
        burgundy: {
          500: '#722F37',
        },
        black: {
          800: '#1F1F1F',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        monospace: ['Monaco', 'Consolas', 'monospace'],
        latinMonoCondOblique: ['Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

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
        lime: {
          400: '#A3E635',
          700: '#4D7C0F',
        },
        navy: {
          400: '#1E3A5F',
        },
        black: {
          800: '#1F1F1F',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        // Using system fonts as fallbacks since we don't have the Latin font files
        latinRoman: ['Georgia', 'Times New Roman', 'serif'],
        latinRomanCaps: ['Georgia', 'Times New Roman', 'serif'],
        latinRomanDunhillOblique: ['Georgia', 'Times New Roman', 'serif'],
        latinMonoCaps: ['Monaco', 'Consolas', 'monospace'],
        latinMonoRegular: ['Monaco', 'Consolas', 'monospace'],
        latinMonoCondOblique: ['Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

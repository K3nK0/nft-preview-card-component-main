/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif']
      },
    },
    colors: {
      softBlue: 'hsl(215, 51%, 70%)',
      cyan: 'hsl(178, 100%, 50%, 50%)',
      cyanTxt: 'hsl(178, 100%, 50%)',
      mainDarkBlue: 'hsl(217, 54%, 11%)',
      cardDarkBlue: 'hsl(216, 50%, 16%)',
      lineDarkBlue: 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
}


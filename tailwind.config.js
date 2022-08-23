const defaultTheme = require('tailwindcss/defaultTheme')
const colorThemes = require('./themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: colorThemes.base,
        rainforest: colorThemes.rainforest,
        candy: colorThemes.candy,
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['"Dank Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

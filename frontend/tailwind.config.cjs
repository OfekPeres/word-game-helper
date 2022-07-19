/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'rockwell-bold': ['RockWellBold', ...defaultTheme.fontFamily.sans],
        'rockwell': ['RockWell', ...defaultTheme.fontFamily.sans],
        'academy': ['AcademyEngraved', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

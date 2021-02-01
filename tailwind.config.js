const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'fjalla': ['Fjalla One', 'sans-serif']
    },
  },
  colors: {
    transparent: 'transparent',
    pink: colors.pink,
    indigo: colors.indigo,
    blue: colors.blue,
    green: colors.emerald,
    gray: colors.trueGray,
    amber: colors.amber,
    violet: colors.violet,
  },
  variants: {
    extend: {},
  },
    plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

}

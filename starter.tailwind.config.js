/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    screens: {
      md: '768px',
      lg: '1280px'
    },
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          maxWidth: '100%',
          paddingInline: '24px',
          '@screen md': {
            maxWidth: '689px',
            padding: 0
          },
          '@screen lg': {
            maxWidth: '1110px',
            padding: 0
          }
        }
      })
    })
  ]
}

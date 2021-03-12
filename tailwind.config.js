const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ["./public/**/*.html"],
    options: {
      safelist: ['mx-auto', 'border-gray-300', 'border-2',  'rounded', 'prose-green']
    }
  },
  theme: {
    extend: {
      colors: {
        'gray-750': '#283140'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // font-mono bg-gray-200 dark:bg-gray-700 text-sm sm:text-base text-gray-700 dark:text-gray-200 subpixel-antialiased px-1 rounded
            ':not(pre) > code': {
              '-webkit-font-smoothing': 'auto',
              '-moz-osx-font-smoothing': 'auto',
              color: theme('colors.gray.600'),
              paddingLeft: '0.4rem',
              paddingRight: '0.4rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              fontFamily: defaultTheme.fontFamily.mono,
              borderRadius: '0.25rem',
              backgroundColor: theme('colors.gray.200')
            },
            ':not(pre) > code::before': {
              content: 'none'
            },
            ':not(pre) > code::after': {
              content: 'none'
            },
            h1: {
              fontWeight: defaultTheme.fontWeight.bold
            }
          }
        },
        light: {
          css: [
            {
              color: theme('colors.gray.200'),
              '[class~="lead"]': {
                color: theme('colors.gray.100'),
              },
              a: {
                color: theme('colors.green.400'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.200'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.400'),
              },
              hr: {
                borderColor: theme('colors.gray.700'),
              },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.700'),
              },
              h1: {
                color: theme('colors.gray.200'),
              },
              h2: {
                color: theme('colors.gray.200'),
              },
              h3: {
                color: theme('colors.gray.200'),
              },
              h4: {
                color: theme('colors.gray.200'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              // font-mono bg-gray-200 dark:bg-gray-700 text-sm sm:text-base text-gray-700 dark:text-gray-200 subpixel-antialiased px-1 rounded
              code: {
                color: theme('colors.white'),
              },
              ':not(pre) > code': {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.700')
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      })
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    borderStyle: true,
  },
  darkMode: 'media'
};

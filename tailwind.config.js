module.exports = {
  purge: {
    content: ["./public/**/*.html"],
    options: {
      safelist: ['mx-auto', 'border-gray-400', 'border-2',  'rounded']
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    borderStyle: true,
  }
};

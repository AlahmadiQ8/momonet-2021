module.exports = {
  purge: ["./public/**/*.html"],
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

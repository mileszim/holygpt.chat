module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './books/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

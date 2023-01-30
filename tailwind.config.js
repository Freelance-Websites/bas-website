/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./src/components/**/*.js", "./dist/js/**/*.js"],
  theme: {
    fontFamily: {
      'sans': ['Neue Montreal', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

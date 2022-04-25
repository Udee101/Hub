const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: '',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        pacifico: ['Pacifico'],
      },
    },
  },
  variants: {},
  plugins: [],
};

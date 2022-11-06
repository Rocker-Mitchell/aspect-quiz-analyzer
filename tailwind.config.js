const defaultTheme = require('tailwindcss/defaultTheme');
const fontStretchPlugin = require('./plugins/font-stretch.js');

module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    screens: {
      sm: defaultTheme.screens.sm,
      md: defaultTheme.screens.md,
      lg: defaultTheme.screens.lg,
    },
    extend: {
      fontFamily: {
        'courier-prime': [
          '"Courier Prime"',
          'courier-std',
          'courier',
          'monospace',
        ],
        'encode-sans': ['"Encode Sans"', ...defaultTheme.fontFamily.sans],
        saira: ['Saira', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [fontStretchPlugin],
};

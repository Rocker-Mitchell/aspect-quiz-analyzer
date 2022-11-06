const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({matchUtilities, theme}) {
    matchUtilities(
      {
        'font-stretch': (value) => ({
          fontStretch: value,
        }),
      },
      {values: theme('fontStretch')}
    );
  },
  {
    theme: {
      fontStretch: {
        'ultra-condensed': '50%',
        'extra-condensed': '62.5%',
        condensed: '75%',
        'semi-condensed': '87.5%',
        normal: '100%',
        'semi-expanded': '112.5%',
        expanded: '125%',
        'extra-expanded': '150%',
        'ultra-expanded': '200%',
      },
    },
  }
);

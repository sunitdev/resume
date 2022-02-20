const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    colors: {
      primary: '#1D3251',
      secondary: '#F2F2F2',
      txtSecondary: '#666666',
      ...colors,
    },
    letterSpacing: {
      widest: '0.3em',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      rockwell: ['Rockwell Nova', 'sans-serif'],
      corbel: ['Corbel', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        body: '33% auto',
      },
      gridTemplateRows: {
        aside: '23% auto',
      },
    },
  },
  plugins: [],
};

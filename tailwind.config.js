const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    colors: {
      primary: '#1D3251',
      secondary: '#F2F2F2',
      ...colors,
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      rockwell: ['Rockwell Nova', 'sans-serif'],
      corbel: ['Corbel', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        body: '35% auto',
      },
      gridTemplateRows: {
        aside: '30% auto',
      },
    },
  },
  plugins: [],
};

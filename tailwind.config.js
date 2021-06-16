module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        gradient_blue: 'linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%)',
      },
      tableLayout: ['hover', 'focus'],
      backgroundColor: {
        gradient_green: 'linear-gradient(90deg,#67d690 0%,#00a99d 100%)',
        gradient_blue: 'linear-gradient(189.16deg, rgb(67, 22, 219) 13.57%, rgb(144, 118, 231) 98.38%)',
        light_green: '#7bc043;',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        full: '100%',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        full: '100%',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        full: '100%',
      },
      textColor: {
        light_green: '#7bc043;',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

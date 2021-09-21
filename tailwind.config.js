module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#000814',
      'dark-blue': '#03071e',
      yellow: '#fca311',
      grey: '#d3d3d3',
      white: '#ffffff',
      link: '#8ecae6'
    },
    fontFamily: {
      'default': ['Source Code Pro']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

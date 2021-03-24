module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner-video': "url('/ques.mp4')"
      },
      height: theme => ({
        "600": "600px"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

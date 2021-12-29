module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{jsx, js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(200px, 1fr))',   // grid-cols-autoFit
        'autoFill': 'repeat(auto-fill, minmax(100px, 1fr))'  // grid-cols-autoFill
      },
    },
  },
  plugins: [],
}

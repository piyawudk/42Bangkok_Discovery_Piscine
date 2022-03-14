module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'home-1': "url('../img/profile_pkoonman.jpg')",
        'home-2': "url('../img/profile_joleandr.jpeg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
}

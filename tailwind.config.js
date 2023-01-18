/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.{html,js}",
  ],
  theme: {
    colors: ({ colors }) => ({
        'black': {
            200: '#262625',
            900: '#040C18',
        },
        'white': '#FFFFFF',
        'red': {
            'light': '#FF4820',
            'dark': '#e32b02',
        },
        'lightPurple': '#AE67FA',
        'lightOrange': '#FF8A71',
        'lighterOrange': '#F49867',
        'blue': '#052D56',
        'textBlue': '#81AFDD',
        'lightBlue': '#042C54',
        'lighterBlue': '#1B78DE',
        'darkBlue': '#031B34',
        'transparent': colors.transparent,
        'teal': colors.teal
    }),
    fontFamily: {
        manrope: "'Manrope', serif",
    },
    fontWeight: {
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },
      extend: {},
  },
  plugins: [],
}

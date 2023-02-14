/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BACKGROUND: '#0A142F',
        MAIN: '#FEC83E',
        CARD: '#E0E5F3',
        BUTTON: '#FFC93E',
        TEXT: '#0A142F',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    fontFamily: true,
  },
  plugins: [],
}

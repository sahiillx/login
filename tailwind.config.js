/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni-moda': ['"Bodoni Moda"', 'serif'],
        'outfit': ['"Outfit"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      height: {
        '90vh': '90vh',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #000000 19%, #442CAC 65%, #7D6DDC 86%, #B8B7F7 100%)',
        'custom-image': "url('/src/assets/LoginBG.png')",
      },
      colors: {
        'custom-border': '#7E6EEA',
      },
    },
  },
  plugins: [],
}


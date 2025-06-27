/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '2rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        'token': 'rgb(255, 116, 30)',
        'card': 'rgb(29 28 34)',
        'navActive': 'rgb(255 1 79)',
        'text': 'rgb(196 207 222)',
        'theme': 'rgb(255 1 79)',
        'dark-theme': 'rgb(153, 0, 47)',
        'btn': 'rgb(41 40 45)',
      },
      '@layer utilities': {
        'bg-img': {
          'backgroundImage': 'url("./src/assets/backgroud.png")'
        },
      },
    },
  },
  plugins: [],
}


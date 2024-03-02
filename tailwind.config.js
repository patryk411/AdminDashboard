/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'title': 'rgb(52, 71, 103)',
        'input': 'rgb(73, 80, 87)',
        'iconsBg': 'rgb(123, 128, 154)',
        'boxShadow': 'rgba(0, 0, 0, 0.2)',
        'green': 'rgb(76, 175, 80)',
        'blue': 'rgb(73, 163, 241)',
        'blackBg': 'rgb(66, 66, 74)',
        'pink': 'rgb(236, 64, 122)',
        'orange': 'rgb(244, 67, 53)',
        'gold': 'rgb(251, 140, 0)',
        'separator': 'rgba(0, 0, 0, 0.12)',
        'border': 'rgb(222, 226, 230)',
        'bgDark': 'rgb(25, 25, 25)',
        'red': 'rgb(229, 57, 53)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'small': '9px',
        'small+': '10.5px',
      }
    },
  },
  plugins: [],
  
}


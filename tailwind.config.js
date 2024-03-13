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
        'blackBgShadow': 'rgb(66, 66, 74, .6)',
        'blackBgShadow2': 'rgb(66, 66, 74, .4)',
        'pink': 'rgb(236, 64, 122)',
        'orange': 'rgb(244, 67, 53)',
        'gold': 'rgb(251, 140, 0)',
        'separator': 'rgba(0, 0, 0, 0.12)',
        'border': 'rgb(222, 226, 230)',
        'bgDark': 'rgb(25, 25, 25)',
        'red': 'rgb(229, 57, 53)',
        'bgWhite': 'rgb(248, 249, 250)',
        'bgShdow': 'rgba(26, 115, 232, 0.6)',
        'switchTg': 'rgb(206, 212, 218)',
        'switchTg2': 'rgb(66, 66, 74)',
        'fb': 'rgb(59, 89, 152)',
        'x': 'rgb(85, 172, 238)',
        'ig': 'rgb(18, 86, 136)',
        'inputBorder': 'rgb(210, 214, 218)',
        'signNav': 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'small': '9px',
        'small+': '10.5px',
      },
      height: {
        'navH': '95vh',
        'profileH': '30vh',
        'signupH': '35vh',
      },
      width: {
        'formW': '430px',
      }
    },
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
  
}


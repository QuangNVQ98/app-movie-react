/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: {
      '0': '0px',
      '2': '2px',
      '4': '4px',
      '5': '5px',
      '8': '8px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '26': '26px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '58': '58px',
      '60': '60px',
      '70': '70px',
      '80': '80px',
      '90': '90px',
      '98': '98px',
      '100': '100px',
      '110': '110px',
      '125': '125px',
      '170': '170px',
      '200': '200px',
      '245': '245px',
      '210': '210px',
      '270': '270px',
      '290': '290px',
      '300': '300px',
      '320': '320px',
      '355': '355px',
      '360': '360px',
      '411': '411px',
      '435': '435px',
      '470': '470px',
      '508': '508px',
    },
    colors: {
      'primary': '#f3f4f6',
      'black-07': 'rgba(0,0,0,.7) 30%',
      'white': '#FFF',
      'black': '#000',
      'gray-2a': '#2a2a2a',
      'gray-2f': '#2f2f2f',
      'gray-d2': '#d2d2d2',
      'gray-6d': '#6d6d6e',
      'gray-e5': '#e5e5e5',
      'gray-e6': '#e6e6e6',
      'gray-80': '#808080',
      'gray-14': '#141414',
      'gray-18': '#181818',
      'gray-77': '#777777',
      'gray-24': '#242424',
      'gray-4d': '#4d4d4d',
      'gray-40': '#404040',
      'gray-42': '#424242',
      'back-75': 'rgb(0 0 0 / 75%) 0px 3px 10px',
      'black-05': 'rgba(0,0,0,0.5)',
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'movie': 'rgb(0 0 0 / 75%) 0px 3px 10px',
        'popup-detail': '0 0 29px -3px rgb(0 0 0 / 12%)'
      },
      backgroundImage: {
        'linear-18': 'linear-gradient(0deg,#181818,transparent 50%)'
      }
    },
  },
  plugins: [],
}

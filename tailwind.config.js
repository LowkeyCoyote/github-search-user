/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: { max: '1024px' },
      sm: { max: '640px' },
    },
    colors: {
      blue: '#0079FF',
      'bluish-black': '#2B3442',
      'bluish-grey': '#697C9A',
      'grayish-blue': '#4B6A9B',
      'dark-blue': '#2B3442',
      'very-light-grey': '#F6F8FF',
      'white': '#FFFFFF',
      'light-blue' : '#60ABFF'
    },

    fontSize: {
      h1: '26px',
      h2: '22px',
      h3: '16px',
      h4: '13px',
      p: '15px',
    },
    lineHeight: {
      h1: '38px',
      h2: '33px',
      h3: '24px',
      h4: '20px',
      p: '25px',
    },
    fontFamily: {
      sans: ['Space Mono', 'sans-serif'],
    },

    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

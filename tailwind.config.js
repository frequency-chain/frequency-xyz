/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      // TODO: cange title to Newake when we get the licence.
      title: ['Poppins', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      disabled: '#BCBAC0',
      cream: '#FEFAF3',
      navy: '#19455E',
      yellow: '#FFD747',
      teal: '#4BA0A5',
      purple: '#2B2F6E',
      orange: '#F87C48',
      indigo: '#5E69FF',
    },
    width: {
      page: '1300px',
      full: '100%',
    },
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '20px',
        xl: '25px',
        '2xl': '30px',
        75: '75px',
        100: '100px',
        200: '200px',
      },
    },
    screens: {
      sm: '0px',
      md: '900px',
      lg: '1300px',
      short: { raw: '(max-height: 700px)' },
    },
  },
};

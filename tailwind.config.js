/** @type {import('tailwindcss').Config} */
import frequencyConfig from '@frequency-chain/style-guide/tailwind.config';

import { MAX_PAGE_WIDTH } from './src/lib/consts';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/@frequency-chain/style-guide/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Newake', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        darkIndigo: '#445BC3',
        tealBright: '#00B6AF',
      },
      width: {
        page: `${MAX_PAGE_WIDTH}px`,
        full: '100%',
      },
      maxWidth: {
        page: `${MAX_PAGE_WIDTH}px`,
        full: '100%',
      },
      minWidth: {
        page: `${MAX_PAGE_WIDTH}px`,
        full: '100%',
      },
      screens: {
        sm: '0px',
        md: '900px',
        lg: '1300px',
        xl: `${MAX_PAGE_WIDTH}px`,
        'vertical-lg': { raw: '(max-height: 700px) and (min-width: 1300px)' },
        'vertical-md': { raw: '(max-height: 700px) and (min-width: 900px)' },
        vertical: { raw: '(max-height: 700px) or (min-width: 0px)' },
        horizontal: { raw: '(min-height: 700px) and (min-width: 1300px)' },
      },
    },
  },
  safelist: ['after:bg-navy', 'after:bg-cream', 'invalid:border-red'],
  presets: [frequencyConfig],
};

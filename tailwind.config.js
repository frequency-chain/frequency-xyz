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
      fontSize: {
        f60: '60px',
      },
      colors: {
        darkIndigo: '#445BC3',
        tealBright: '#00B6AF',
        grayBorder: '#E5E7E7',
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
    },
  },
  safelist: ['after:bg-navy', 'after:bg-cream', 'invalid:border-red'],
  presets: [frequencyConfig],
};

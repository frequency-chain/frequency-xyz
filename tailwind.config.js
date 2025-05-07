/** @type {import('tailwindcss').Config} */
import frequencyConfig from '@frequency-chain/style-guide/tailwind.config';
import debugScreens from 'tailwindcss-debug-screens';

import { MAX_PAGE_WIDTH } from './src/lib/consts';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    debugScreens: { ignore: ['vertical', 'horizontal'] },
    extend: {
      fontSize: { f60: '60px' },
      colors: { darkIndigo: '#445BC3', tealBright: '#00B6AF', grayBorder: '#C8CDD0' },
      width: { page: `${MAX_PAGE_WIDTH}px`, full: '100%' },
      maxWidth: { page: `${MAX_PAGE_WIDTH}px`, full: '100%' },
      minWidth: { page: `${MAX_PAGE_WIDTH}px`, full: '100%' },
      spacing: { f56: '56px' },
      backgroundImage: {
        'waves-bg': "url('src/lib/assets/Ecosystem/waves-two.svg')",
      },
      screens: {
        xs: '0',
        sm: '320px',
        md: '744px',
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
  plugins: [debugScreens],
  presets: [frequencyConfig],
};

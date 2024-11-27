import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // dependent on host platform, see GitHub pages doc, maybe?
      precompress: true,
      strict: true,
    }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
      routes: 'src/routes',
    },
  },
};

export default config;

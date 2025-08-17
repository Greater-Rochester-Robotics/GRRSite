import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
	compilerOptions: {
		warningFilter: (warning) => {
			const ignore = ['a11y_media_has_caption'];
			return !ignore.includes(warning.code);
		}
	}
};

export default config;

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: {
			default: true
		}
	},
	paths: {
		base: dev ? "" : "/word-game-helper"
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;

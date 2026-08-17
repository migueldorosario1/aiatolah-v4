// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.aiatolah.com',
		integrations: [
		sitemap({
			filter: (page) => {
				const path = new URL(page).pathname;
				return !/(^|\/)(teste|preview)(\/|-|$)/.test(path);
			},
		}),
	],
});

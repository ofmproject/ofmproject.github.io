// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://ofmproject.org',
	integrations: [
		starlight({
			title: 'Open Firewall Manager',
			description:
				'Central, vendor-neutral management for open-source firewalls. Starting with OPNsense.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
			},
			favicon: '/favicon.svg',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ofmproject' },
			],
			customCss: [
				'@fontsource-variable/inter',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/theme.css',
			],
			// One-pager: no sidebar, no search, no prev/next links.
			sidebar: [],
			pagefind: false,
			pagination: false,
			lastUpdated: false,
		}),
	],
});

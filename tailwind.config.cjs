/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['"Source Serif 4"', 'Georgia', 'serif'],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		// Dark theme: charcoal page, near-black sidebar, light text, amber accent.
		themes: [
			{
				sinan: {
					"color-scheme": "dark",
					// Amber: buttons, links, headline, timeline dots.
					"primary": "#e0a458",
					"primary-content": "#1a1a1a",
					// Muted grey: dates, badges.
					"secondary": "#9aa3ad",
					"secondary-content": "#16181c",
					"accent": "#e0a458",
					"accent-content": "#1a1a1a",
					// Sidebar and mobile header.
					"neutral": "#16181c",
					"neutral-content": "#d4d6da",
					// Page, cards and borders.
					"base-100": "#1e2126",
					"base-200": "#262a30",
					"base-300": "#343941",
					"base-content": "#e6e6e6",
					"--rounded-btn": "0.5rem",
				},
			},
		],
		logs: false,
	},
}

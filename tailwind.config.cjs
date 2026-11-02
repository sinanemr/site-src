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
		// Same palette as Sinan's CVs: navy for structure, slate for secondary text.
		themes: [
			{
				sinan: {
					"primary": "#1f3a5f",
					"primary-content": "#ffffff",
					"secondary": "#5b6676",
					"accent": "#2f6f8f",
					"neutral": "#1d232b",
					"base-100": "#ffffff",
					"base-200": "#f2f5f9",
					"base-300": "#e3e9f1",
					"base-content": "#1d232b",
					"--rounded-btn": "0.5rem",
				},
			},
		],
		logs: false,
	},
}

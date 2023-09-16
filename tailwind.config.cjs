/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				appear: 'appear 6s'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}

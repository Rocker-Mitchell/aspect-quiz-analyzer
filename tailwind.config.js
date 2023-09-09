import defaultTheme from 'tailwindcss/defaultTheme';
import fontStretchPlugin from './tailwindcss-plugins/font-stretch';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'encode-sans': ['"Encode Sans Variable"', ...defaultTheme.fontFamily.sans],
				saira: ['"Saira Variable"', '"Encode Sans Variable"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [fontStretchPlugin]
};

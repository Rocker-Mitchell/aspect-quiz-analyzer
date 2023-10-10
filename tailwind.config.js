import defaultTheme from 'tailwindcss/defaultTheme';
import fontStretchPlugin from './tailwindcss-plugins/font-stretch';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				time: {
					DEFAULT: '#b70d0e',
					symbol: '#ff2106'
				},
				space: {
					DEFAULT: '#000',
					symbol: '#fff'
				},
				heart: {
					DEFAULT: '#55142a',
					symbol: '#bd1864'
				},
				mind: {
					DEFAULT: '#00923d',
					symbol: '#06ffc9'
				},
				hope: {
					DEFAULT: '#ffde55',
					symbol: '#fdfdfd'
				},
				rage: {
					DEFAULT: '#520c61',
					symbol: '#9c4dad'
				},
				light: {
					DEFAULT: '#f0840c',
					symbol: '#f6fa4e'
				},
				void: {
					DEFAULT: '#104ea2',
					symbol: '#001957'
				},
				breath: {
					DEFAULT: '#4379e6',
					symbol: '#47dff9'
				},
				blood: {
					DEFAULT: '#3e1601',
					symbol: '#ba1016'
				},
				life: {
					DEFAULT: '#a49787',
					symbol: '#72eb34'
				},
				doom: {
					DEFAULT: '#306800',
					symbol: '#000'
				}
			},
			fontFamily: {
				'encode-sans': ['"Encode Sans Variable"', ...defaultTheme.fontFamily.sans],
				saira: ['"Saira Variable"', '"Encode Sans Variable"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [fontStretchPlugin]
};

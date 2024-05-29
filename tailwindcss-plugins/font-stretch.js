import plugin from 'tailwindcss/plugin';

/**
 * A Tailwind plugin for a utility class set that applies `font-stretch`.
 *
 * The utility comes with theme values (`theme` -> `fontStretch`) and can take arbitrary values
 * (ex: `font-stretch-[110%]`).
 */
export default plugin(
	function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				'font-stretch': (value) => ({
					'font-stretch': value
				})
			},
			{ values: theme('fontStretch') }
		);
	},
	{
		theme: {
			fontStretch: {
				'ultra-condensed': '50%',
				'extra-condensed': '62.5%',
				condensed: '75%',
				'semi-condensed': '87.5%',
				normal: '100%',
				'semi-expanded': '112.5%',
				expanded: '125%',
				'extra-expanded': '150%',
				'ultra-expanded': '200%'
			}
		}
	}
);

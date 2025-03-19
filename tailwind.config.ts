const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		screens: {
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1535px' },
			'2xl': { min: '1536px' },
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				primary: '#2E5655',
				secondary: '#F7B15B',
				primaryred: '#F65C52',
				primaryblue: '#48C5BD',
			},
		},
	},
	plugins: [],
};

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat'],
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
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
				primary: { light: '#59a6a3', main: '#2E5655', dark: '#244241' },
				secondary: { light: '#fad19e', main: '#F7B15B', dark: ' #f59724' },
				primaryred: { light: '#f98e86', main: '#F65C52', dark: '#f21c0d' },
				primaryblue: { light: '#77d4ce', main: '#48C5BD', dark: '#319b94' },
				'primary-background': '#EBEBEB',
			},
		},
	},
	plugins: [],
};

const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {
    extend: {
      fontFamily: {
        'sans': ['poppins']
      }
    }
	},
	plugins: [require('@tailwindcss/forms')],
};

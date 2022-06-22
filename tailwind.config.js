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
      colors:{
        'a-blue': '#00316B',
        'a-green': '#00FFF0',
      },
      fontFamily: {
        'sans': ['poppins']
      }
    }
	},
	plugins: [require('@tailwindcss/forms')],
};

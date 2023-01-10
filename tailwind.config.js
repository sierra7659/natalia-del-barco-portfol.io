/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins-Regular', 'sans-serif'],
				serif: ['Bukowski-Regular', 'Times New Roman'],
				bold: ['Poppins-Bold', 'sans-serif']
			}
		}
	}
}

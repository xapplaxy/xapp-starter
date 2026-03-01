/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    '../../packages/ui/src/components/**/*.{html,js,svelte,ts}',
    './src/**/*.{html,js,svelte,ts}','./index.html'
  ],
  theme: {
	  screens: {
		'xs': '475px',
		...defaultTheme.screens,
	  },	  
	  container: {
		center: true,
		padding: "2rem",
	  },
	  fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif'],
	  },
	  extend: {
		spacing: {
		  '8xl': '96rem',
		  '9xl': '128rem',
		},
		borderRadius: {
		  '4xl': '2rem',
		},
		colors:{
			primary: {
				'50': '#f0f9ff',
				'100': '#dff3ff',
				'200': '#b9e8fe',
				'300': '#7ad7ff',
				'400': '#34c4fc',
				'500': '#09acee',
				'600': '#008acb',
				'700': '#006ea4',
				'800': '#045d88',
				'900': '#0a4d70',
				'950': '#062c43',
			},	
            secondary:{
				'800': '#7b337d',
				'900': '#632c63',
			},  
			tertiary: {
				'50': '#faf7fc',
				'100': '#f5edfa',
				'200': '#eadbf3',
				'300': '#ddbee9',
				'400': '#c897db',
				'500': '#af6ec7',
				'600': '#934fab',
				'700': '#7a3f8c',
				'800': '#653573',
				'900': '#562f60',
				'950': '#34153d',
			}
        }
	  }
	},
  darkMode: 'class',
}

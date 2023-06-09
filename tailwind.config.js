/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'my-purple': '#7B4AE2',
        'my-white': '#EEEEEE',
        'my-gray': '#84868A',
        'my-dark-purple': '#0F1120',
        'my-very-dark-purple': '#090E16'

      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'

      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}

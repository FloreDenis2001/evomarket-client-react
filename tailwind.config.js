/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,png,jpg,jpeg,svg}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        secondary: '#FF7F7B',
        white: '#FFFFFF',    
        black: '#141414',
      },
      fontFamily: {
        custom: ['CustomFont', 'sans'],
      },
      spacing: {
        '72': '18rem',
      },
    
    },
  },
  plugins: [],
}

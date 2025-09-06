/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./public/index.html",
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [
   
  ],
}
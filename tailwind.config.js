/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'light': '#fceabb',
          'DEFAULT': '#f8c34e',
          'dark': '#c4972c',
        },
        'background': '#fff9e6',
        'surface': '#ffffff',
        'text-primary': '#4a2c0f',
        'text-secondary': '#7a5a3e',
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

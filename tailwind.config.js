/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chestnut: '#914e2e',
        alabaster: '#f0eee1',
        grullo: '#9ea67a',
        darkLava: '#4e472b',
        golden: '#c7aa64',
        jellyBean: '#dd6657',
      },
      fontFamily: {
        serif: ['Trirong', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

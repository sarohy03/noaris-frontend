/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#0E1117',
      },
    },
  },
  plugins: [],
  safelist: [
    "no-scrollbar",
  ],
};

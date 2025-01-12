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
        gradientStart: "#26151B",
        gradientEnd: "#1C2130",

      },
    },
  },
  plugins: [],
  safelist: [
    "no-scrollbar",
  ],
};

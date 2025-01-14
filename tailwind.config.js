/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansPro: ["sansPro", "sans-serif"],
        sansProBlack: ["sansProBlack", "sans-serif"],
        sansProBold: ["sansProBold", "sans-serif"],
        sansProBoldIT: ["sansProBoldIT", "sans-serif"],
        sansProExtraLight: ["sansProExtraLight", "sans-serif"],
        sansProExtraLightIt: ["sansProExtraLightIt", "sans-serif"],
        sansProIt: ["sansProIt", "sans-serif"],
        sansProLight: ["sansProLight", "sans-serif"],
        sansProLightIT: ["sansProLightIT", "sans-serif"],
        sansProRegular: ["sansProRegular", "sans-serif"],
        sansProSemiBold: ["sansProSemiBold", "sans-serif"],
        sansProSemiBoldIt: ["sansProSemiBoldIt", "sans-serif"],
      },
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

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./docusaurus.config.js"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        fontSize: {
          "5xl": "2.5rem",
        },
        brand: {
          900: "#332c05",
          850: "#4d4107",
          800: "#66570a",
          700: "#b29911",
          650: "#e6b600",
          600: "#f0cd14",
          500: "#ffda18",
          400: "#ffe146",
          300: "#ffe974",
          200: "#fff0a3",
          150: "#fff4ba",
          100: "#fff8d1",
          50: "#fffbe8",
        },
        gray: {
          950: "#0D0E10",
          900: "#1B1D20",
          850: "#282B31",
          800: "#353A41",
          700: "#505661",
          600: "#6A7382",
          500: "#8590A2",
          400: "#9DA6B5",
          300: "#B6BCC7",
          200: "#CED3DA",
          150: "#DADEE3",
          100: "#E7E9EC",
          50: "#F9F9F9",
        },
        blue: {
          950: "#0c192b",
          900: "#14253D",
        },
      },
      screens: {
        xs: { max: "576px" },
      },
    },
    fontFamily: {
      sans: ['"DM Sans"', "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

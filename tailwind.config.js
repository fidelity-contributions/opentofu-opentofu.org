/**
 * Tailwind CSS configuration file.
 *
 * @type {import('tailwindcss').Config}
 * @property {Object} theme.spacing - Defines custom spacing utilities.
 * @property {string} theme.spacing.ps-xs - Extra small spacing (4px).
 * @property {string} theme.spacing.ps-sm - Small spacing (8px).
 * @property {string} theme.spacing.ps-md - Medium spacing (16px).
 * @property {string} theme.spacing.ps-lg - Large spacing (24px).
 * @property {string} theme.spacing.ps-xl - Extra large spacing (32px).
 * @property {string} theme.spacing.ps-2xl - 2x extra large spacing (40px).
 * @property {string} theme.spacing.ps-3xl - 3x extra large spacing (48px).
 */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "./docusaurus.config.js"],
  theme: {
    extend: {
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
    spacing: {
      'ps-xs': '4px',
      'ps-sm': '8px',
      'ps-md': '16px',
      'ps-lg': '24px',
      'ps-xl': '32px',
      'ps-2xl': '40px',
      'ps-3xl': '48px',
    },
    fontFamily: {
      sans: ['"DM Sans"', "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

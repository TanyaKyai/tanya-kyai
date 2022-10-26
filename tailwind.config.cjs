const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23705D",
        secondary: "#48B89D",
        gray: "#F3F2F2",
        grayActive: "#E6E4E4",
        darkGray: "#535353",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        milliard: ["Milliard", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

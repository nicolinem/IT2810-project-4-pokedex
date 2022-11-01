/** @type {import('tailwindcss').Config} */
const percentageWidth = require("tailwindcss-percentage-width");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        "bg-skin-primary": "#41444A",
        "bg-skin-secondary": "#f8f8f8",
        "bg-skin-tertiary": "#000000",
      },
    },
  },
  plugins: [percentageWidth],
};

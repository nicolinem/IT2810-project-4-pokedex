/** @type {import('tailwindcss').Config} */
const percentageWidth = require("tailwindcss-percentage-width");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1600px",
    },
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

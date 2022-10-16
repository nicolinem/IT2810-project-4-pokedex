/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-skin-primary": "#41444A",
        "bg-skin-secondary": "#f8f8f8",
        "bg-skin-tertiary": "#000000",
      },
    },
  },
  plugins: [],
};

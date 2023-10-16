/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#8d8d8d",
        purple: "#8284FA",
        gray: "#808080",
        blue: "#4EA8DE",
        roxo: "#927bbd",
      },
      boxShadow: {
        xlCustom: "rgba(0, 0, 0, 0.2) 0px 20px 10px;",
      },
    },
  },
  plugins: [],
};

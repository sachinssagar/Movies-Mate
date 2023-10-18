module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      screens: {
        others: {
          min: "340",
          max: "1200px",
        },
      },
    },
  },
  plugins: [],
};

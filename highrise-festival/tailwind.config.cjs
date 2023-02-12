/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        highrisePink: "#EC7676",
        highriseYellow: "#ffe414",
        highrisePeach: "#eb9f6f",
      },
    },
  },
  plugins: [],
};

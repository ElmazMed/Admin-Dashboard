/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["poppins", "sans-serif"],
    },
    extend: {
      height: {
        "custom-h": "40rem",
      },
    },
  },
  plugins: [],
};

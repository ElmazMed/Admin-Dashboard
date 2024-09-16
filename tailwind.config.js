/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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

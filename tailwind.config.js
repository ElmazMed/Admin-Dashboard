/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
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

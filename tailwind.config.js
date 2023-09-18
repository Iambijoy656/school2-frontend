/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005e9a",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
        lg: "6rem",
        xl: "7rem",
        "2xl": "7rem",
      },
    },
  },
  plugins: [],
};

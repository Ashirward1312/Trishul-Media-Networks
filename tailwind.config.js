/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0E1B38", // Deep Navy Blue
        },
        gold: {
          500: "#C89B3C", // Warm Golden
        },
        offwhite: {
          500: "#F8F9FA", // Page Background
        },
        slate: {
          500: "#5A6578", // Muted Slate Gray
        },
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

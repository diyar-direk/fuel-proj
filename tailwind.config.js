/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navbarlink: "-10px 0px 20px 0px rgba(0,0,0,0.12)",
      },
      colors: {
        gray: { main: "#C7C7C7" },
        primary: {
          main: "#1376B3",
          dark: "#003495",
          light: "#BCD3E2",
        },
        secondary: {
          main: "#F1F1F1",
        },
        danger: {
          main: "#B31329",
          dark: "#730000",
          light: "#FFDDDD",
        },
        dark: {
          main: "#000000",
          dark: "#DFDFDF",
          light: "#3E3E3E",
        },
        success: {
          main: "#219653",
        },
        info: {
          main: "#F2994A",
        },
      },
    },
  },
  plugins: [],
};

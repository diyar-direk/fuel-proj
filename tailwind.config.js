/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "navbarlink-rtl": "-10px 0px 20px 0px rgba(0,0,0,0.12)",
        "navbarlink-ltr": "10px 0px 20px 0px rgba(0,0,0,0.12)",
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
          secondary: "#C7C7C7",
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
        vehicle: {
          main: "#1376B3",
        },
        heating: {
          main: "#FFC020",
        },
        industrial: {
          main: "#7B7B7B",
        },
        agriculture: {
          main: "#3DB858",
        },
        diwan: {
          main: "#161341",
        },
        administration: {
          main: "#1E1E1E",
        },
      },
      screens: {
        "force-all": "0px",
        xxxs: "275px",
        xxs: "340px",
        xs: "440px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1640px",
        "5xl": "1840px",
      },
    },
  },
  plugins: [],  
};

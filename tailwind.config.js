/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      colors: {
        deepsea: "#2036D4",
        coursera: "#0068B0",
        lightblue: "#9AA6DA",
        grey: "#707483",
        lightgrey: "#B1B3CF",
        darkgrey: "#3A3C42",
        black: "#040C04",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
};

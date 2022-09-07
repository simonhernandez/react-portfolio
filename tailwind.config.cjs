/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5353",
        primary_light: "rgba(255, 94, 94, .15)",
        primary_very_light: "#FFFAFA",
        white: "#FFF",
        dark: "#242942",
        gray: "rgba(237, 242, 246, .75)",
        gray_light: "rgba(235, 237, 244, .4)",
        gray_dark: "#979797",
      },
      fontFamily: {
        ubuntu_mono: ["Ubuntu Mono", "sans-serif"],
      },
      boxShadow: {
        'header': '0 1px 6px 0 rgba(32, 33, 36, 0.28)',
      }
    },
    screens : {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

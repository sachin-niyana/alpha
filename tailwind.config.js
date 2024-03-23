/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
      aptos: ["aptos", "sans-serif"],
    },
    fontSize: {
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "38px",
      xxl: "48px",
      "2xl": "64px",
      "3xl": "86px",
    },
    extend: {
      backgroundImage: {
        "linear-gradient-btn":
          "linear-gradient(180deg, #FF684D 0%, #FF5269 100%)",
        "footer-bg": "url('/assets/images/footer/map-bg.png')",
      },
      colors: {
        "rich-black": "#2b2b2b",
        "dark-black": "#1e1e1e",
        gray: "#656463",
        "dark-gray": "#b9b9b9",
        "light-white": "#f6f6f6",
        "light-gray": "#eceae7",
        bombay: "#b6b6b6",
      },
    },
  },
  plugins: [],
};

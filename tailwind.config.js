/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "38px",
      xxl: "48px",
      "2xl": "68px",
      "3xl": "86px",
    },
    extend: {
      colors: {
        "rich-black": "#b2b2b2",
        "dark-Blblackack": "#1e1e1e",
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

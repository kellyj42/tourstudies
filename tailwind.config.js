/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#123a63",
        accent: "#d59a43",
        ink: "#102033",
        mist: "#eef4f8",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 32, 51, 0.12)",
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top, rgba(213, 154, 67, 0.14), transparent 35%), linear-gradient(135deg, rgba(18, 58, 99, 0.94), rgba(9, 20, 34, 0.86))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

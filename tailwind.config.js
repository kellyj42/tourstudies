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
        primary: "#734F96",
        accent: "#d59a43",
        ink: "#2f2140",
        mist: "#f4eef8",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(47, 33, 64, 0.14)",
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top, rgba(213, 154, 67, 0.14), transparent 35%), linear-gradient(135deg, rgba(115, 79, 150, 0.96), rgba(75, 48, 108, 0.9))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

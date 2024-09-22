/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    variants: ["slashed-zero", "ordinal"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        dweb: {
          primary: "#00bda1",
          secondary: "#0000ff",
          accent: "#3000ff",
          neutral: "#071417",
          "base-100": "#242b29",
          info: "#00a3ed",
          success: "#00e268",
          warning: "#f6a300",
          error: "#ff004d",
        },
      },
    ],
    base: true, // applies background color and foreground color for root element by default
    darkTheme: "dweb",
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

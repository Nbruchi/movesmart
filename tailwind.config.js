/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-bg": "#04293A",
        "app-btn": "#69B6F4",
        "app-form": "#041C32",
        component: "#0A5088",
        "component-btn": "#04293ab3",
        secondary: "#E59D39",
        "app-text": "#5B8FB9",
        "app-green": "#00AF00",
        "app-white": "#DCF8CF",
        "app-red": "#FC0F0F",
        "app-beige": "#FFDBDB",
        "app-gray": "#04293A",
        "app-red-darker": "#C00A0A",
        "secondary-light": "#FDC22B",
        "app-white-darker": "#D9D9D9",
      },
    },
  },
  plugins: [],
};

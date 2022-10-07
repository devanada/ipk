/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-gh": "#0d1117",
      },
    },
  },
  plugins: [require("daisyui")],
};

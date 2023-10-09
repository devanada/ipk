/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        rataalada: "hsl(120, 100%, 50%)",
        "rataalada-semi": "hsl(120, 50%, 50%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

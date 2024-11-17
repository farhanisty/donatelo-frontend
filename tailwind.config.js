/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006C67",
        secondary: "#FFB100",
        background: "#FFFBF2",
      },
    },
  },
  plugins: [],
};

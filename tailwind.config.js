/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primaryFont: "'Inter', sans-serif",
        secondaryFont: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};

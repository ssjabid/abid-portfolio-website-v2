/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        wider: "0.12em",
        widest: "0.15em",
      },
      fontWeight: {
        light: "300",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

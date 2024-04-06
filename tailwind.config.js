/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: (theme) => ({
        "midnight-sea": "#051118",
      }),
    },
  },
  plugins: [],
};

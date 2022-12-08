/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowTop: "0px 3px 20px 5px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};

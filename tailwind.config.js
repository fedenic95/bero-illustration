/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      nero: "#2e3532",
      neropaco: "#2e35325e",
      bianco: "#f0eff4",
      verde: "#44c3a6",
      viola: "#6580ca",
      rosa: "#efa9ae",
    },
    extend: {
      fontFamily: {
        corsivo: ["Vibur", "cursive"],
      },
    },
  },
  plugins: [],
};

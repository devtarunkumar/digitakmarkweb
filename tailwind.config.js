/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing: "typing 3s steps(20) forwards",
        blink: "blink 0.8s step-end infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        run: {
          "0%" : { transform: "translateY(0vw)" },
          "50%": { transform: "translateY(-50vh)" },
          // "55%": { transform: "translateX(50vh)" },
          // "55%": { transform: "scaleX(-1)" },
        },
      },
      animation: {
        run: "run 7s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ["'Great Vibes'", "cursive"],
        sans: ["'Roboto'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        romanticPink: "#ffe4e6", // untuk background soft
        softRose: "#fbcfe8",     // untuk aksen
        bubblePink: "#ff80ab",   // untuk tombol
      },
      boxShadow: {
        love: "0 10px 25px rgba(255, 182, 193, 0.4)",
        soft: "0 4px 12px rgba(0,0,0,0.1)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(255, 192, 203, 0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        popIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "bounce-slow": "bounceSlow 3s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s infinite",
        "pop-in": "popIn 0.6s ease-out forwards",
        "float-up": "floatUp 3s ease-in-out infinite",
      },
      screens: {
        xs: "360px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

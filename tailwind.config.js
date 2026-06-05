/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-dk]'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dashboard: {
          bg: "var(--bg)",
          sf: "var(--sf)",
          sf2: "var(--sf2)",
          sf3: "var(--sf3)",
          bd: "var(--bd)",
          tx: "var(--tx)",
          tx2: "var(--tx2)",
          tx3: "var(--tx3)",
          gr: "var(--gr)",
          grbg: "var(--grbg)",
          grd: "var(--grd)",
          glt: "var(--glt)",
          gdim: "var(--gdim)",
          gbdr: "var(--gbdr)",
        },
        vi: {
          green: "var(--vi-green)",
          "green-dark": "var(--vi-green-dark)",
          "green-mid": "var(--vi-green-mid)",
          bg: "var(--vi-bg)",
          surface: "var(--vi-surface)",
          surface2: "var(--vi-surface2)",
          border: "var(--vi-border)",
          "border-hard": "var(--vi-border-hard)",
          text: "var(--vi-text)",
          text2: "var(--vi-text2)",
          text3: "var(--vi-text3)",
          dark: "var(--vi-dark)",
        },
        auth: {
          bg: "#07090f",
          sf: "#061410",
          sf2: "#111827",
          sf3: "#053421",
          bd: "#ffffff12",
          tx: "#d1d6e5",
          tx2: "#d1d6e5",
          tx3: "#fdf7f7",
          gr: "#2dd4a0",
          grbg: "#2dd4a01a",
          glt: "#00c96e",
        },
      },
      width: {
        sidebar: "var(--sb)",
      },
      maxWidth: {
        "auth-panel": "1100px",
        "auth-form": "480px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.18s ease",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        dashboard: "901px",
      },
    },
  },
  plugins: [],
};

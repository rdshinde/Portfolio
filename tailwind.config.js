/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
        "title": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "caption": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "overline": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "500" }],
      },
      colors: {
        neutral: {
          950: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#6e6e73",
          light: "#86868b",
          dark: "#424245",
        },
      },
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "apple-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "blur-in": "blurIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        blurIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

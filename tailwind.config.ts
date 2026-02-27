import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neural: {
          bg: "#09090b",
          surface: "#18181b",
          card: "#27272a",
          border: "#3f3f46",
          cyan: "#67e8f9",
          purple: "#c084fc",
          pink: "#f9a8d4",
          green: "#86efac",
          amber: "#fde68a",
        },
        auto: {
          red: "#c084fc",
          chrome: "#e4e4e7",
          steel: "#a1a1aa",
          carbon: "#18181b",
          blue: "#67e8f9",
          gold: "#fde68a",
          asphalt: "#3f3f46",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "rev": "rev 1.5s ease-out",
        "dash": "dash 2s ease-in-out infinite",
        "speedline": "speedline 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(230, 57, 70, 0.2)" },
          "100%": { boxShadow: "0 0 25px rgba(230, 57, 70, 0.5)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rev: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        dash: {
          "0%": { strokeDashoffset: "283" },
          "50%": { strokeDashoffset: "75" },
          "100%": { strokeDashoffset: "283" },
        },
        speedline: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

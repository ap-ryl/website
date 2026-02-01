/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      animation: {
        "infra-pop": "infra-pop 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "infra-pop": {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.3) rotate(-10deg)",
            filter: "blur(20px)",
          },
          "15%": {
            opacity: "0.95",
            transform: "translate(-50%, -50%) scale(1.1) rotate(5deg)",
            filter: "blur(0px)",
          },
          "40%": {
            transform: "translate(-50%, -50%) scale(1) rotate(-2deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.85) rotate(0deg)",
            filter: "blur(10px)",
          },
        },
      },
    },
  },
  plugins: [],
};

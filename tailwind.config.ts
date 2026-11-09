import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        resilience: {
          navy: "#0B1E3D",
          "navy-light": "#152E57",
          "navy-dark": "#071326",
          ivory: "#F4F0E6",
          "ivory-light": "#FAF8F2",
          "ivory-dark": "#E9E3D3",
          gold: "#C5A04A",
          "gold-light": "#DFBF6E",
          "gold-dark": "#9C7A2E",
          charcoal: "#202833",
          "canvas-bg": "#E6E6E4",
          muted: "#6B7280",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(11, 30, 61, 0.07)",
        "gold-glow": "0 0 25px rgba(197, 160, 74, 0.25)",
        card: "0 4px 20px -2px rgba(11, 30, 61, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

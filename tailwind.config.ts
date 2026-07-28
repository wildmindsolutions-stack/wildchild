import type { Config } from "tailwindcss";

/**
 * Palette (user swatches) applied like the reference site:
 * Ebony #414833  → buttons, footer, headings, icons
 * Reseda #737A5D → accent / highlight boxes (sage CTA blocks)
 * Sage #A4AC86   → soft accents, icon washes
 * Dun #CCBFA3    → chips, soft borders
 * Bone #EBE3D2   → cream section backgrounds
 * White #FFFFFF  → navbar + cards
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#414833",
          soft: "#5a6248",
          muted: "#737A5D"
        },
        brand: {
          50: "#f4f2ea",
          100: "#EBE3D2",
          200: "#CCBFA3",
          300: "#A4AC86",
          400: "#8b9370",
          500: "#737A5D",
          600: "#414833",
          700: "#323828",
          800: "#2a2f22"
        },
        accent: {
          DEFAULT: "#737A5D",
          soft: "#A4AC86"
        },
        dun: "#CCBFA3",
        sage: "#A4AC86",
        paper: "#EBE3D2",
        surface: "#FFFFFF"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      maxWidth: {
        container: "1200px"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

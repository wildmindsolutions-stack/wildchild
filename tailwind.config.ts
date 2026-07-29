import type { Config } from "tailwindcss";

/**
 * Palette (user swatches):
 * Forest Green #2F4A3A   → all text, headings, hover states
 * Olive Sage #6E7C61     → buttons, filled boxes, bands, icon tiles
 * Mushroom Taupe #9B8D7A → muted accents
 * Warm Beige #D8C8B4     → chips, soft borders
 * Linen Cream #EDE5D8    → cream section backgrounds
 * White #FFFFFF          → navbar + cards
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#2F4A3A",
          soft: "#3B5A47",
          muted: "#5C6B55"
        },
        olive: {
          DEFAULT: "#6E7C61",
          dark: "#5B6852",
          light: "#8B9779"
        },
        brand: {
          50: "#F7F4ED",
          100: "#EDE5D8",
          200: "#D8C8B4",
          300: "#9B8D7A",
          400: "#8B9779",
          500: "#6E7C61",
          600: "#5B6852",
          700: "#2F4A3A",
          800: "#24382C"
        },
        accent: {
          DEFAULT: "#6E7C61",
          soft: "#9B8D7A"
        },
        dun: "#D8C8B4",
        taupe: "#9B8D7A",
        sage: "#A8B598",
        paper: "#EDE5D8",
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

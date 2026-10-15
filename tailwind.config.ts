import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080a0f",
        card: "hsl(220 26% 9%)",
        line: "hsl(215 22% 18%)",
        muted: "hsl(215 16% 57%)",
        fg: "hsl(210 40% 96%)",
        accent: "#67e8f9",
        violet: "#a78bfa",
        mint: "#34d399",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

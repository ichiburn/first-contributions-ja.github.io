import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoEmoji: ["var(--font-noto-color-emoji), var(--font-noto-emoji)"],
      },
    },
    keyframes: {
      horizontal: {
        from: {
          transform: "translateX(0)",
        },
        to: {
          transform: "translateX(95vw)",
        },
      },
      vertical: {
        from: {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(80vh)",
        },
      },
      topToBottomAtHeroSp: {
        from: {
          transform: "translateY(0)",
        },

        to: {
          transform: "translateY(110vh)",
        },
      },
      topToBottomAtHeroPc: {
        from: {
          transform: "translateY(0)",
        },

        to: {
          transform: "translateY(150vh)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "#f3f4f6",
        gold: {
          light: "#fef08a",
          primary: "#d4af37",
          dark: "#1c1910",
        },
      },
    },
  },
  plugins: [],
};
export default config;
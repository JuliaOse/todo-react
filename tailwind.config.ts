import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // all files in your src folder
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#fff",
          dark: "#24273C",
        },
        text: {
          light: "#000",
          dark: "#CACCE7",
        },
        accent: "#4f46e5",
      },
    },
  },
  darkMode: "class", // enables class-based dark mode
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-dark": "#25546F",
      "primary-blue": "#0062FF",
      "primary-blue-200": "#f6f8fe",
      "primary-succes": "#22C59A",
      secondary: "#92A9B7",
      brown: "#383638",
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

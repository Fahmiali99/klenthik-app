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
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

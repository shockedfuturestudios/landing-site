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
        // Material 3-style color palette (DARK MODE)
        primary: "#D0BCFF",
        "on-primary": "#381E72",
        "primary-container": "#4F378B",
        "on-primary-container": "#EADDFF",
        secondary: "#CCC2DC",
        "on-secondary": "#332D41",
        "secondary-container": "#4A4458",
        "on-secondary-container": "#E8DEF8",
        tertiary: "#EFB8C8",
        "on-tertiary": "#492532",
        "tertiary-container": "#633B48",
        "on-tertiary-container": "#FFD8E4",
        error: "#F2B8B5",
        "on-error": "#601410",
        "error-container": "#8C1D18",
        "on-error-container": "#F9DEDC",
        background: "#1C1B1F", // Main page background
        "on-background": "#E6E1E5", // Main page text
        surface: "#1C1B1F", // "Surface" (e.g., Navbar) - same as bg for minimal look
        "on-surface": "#E6E1E5", // Text on "Surface"
        "surface-variant": "#49454F", // Cards, footers, "different" surfaces
        "on-surface-variant": "#CAC4D0", // Text on "surface-variant"
        outline: "#938F99",
        shadow: "#000000",
        "inverse-surface": "#E6E1E5",
        "inverse-on-surface": "#313033",
        "inverse-primary": "#6750A4",
      },
    },
  },
  plugins: [],
};
export default config;

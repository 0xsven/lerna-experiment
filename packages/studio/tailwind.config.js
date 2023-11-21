import config from "../ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../ui/**/*.{js,jsx,ts,tsx}",
    "../ui/tailwind.config.js",
  ],
  plugins: [],
  ...config,
};

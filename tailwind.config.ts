import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14FFFF", 
        secondary: "#0207F7", 
      },
      backgroundImage: {
        "angled-gradient": "linear-gradient(100deg, #0207F7, #14FFFF)",
        "mpattern": "url('/images/mbg.png')"
      },
    },
  },
  plugins: [],
} satisfies Config;

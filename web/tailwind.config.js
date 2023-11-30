/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1080px",
      lg: "1441px",
    },
    spacing: {
      0: 0,
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
      12: "12rem",
      13: "13rem",
      "02re": "0.2rem",
      "05re": "0.5rem",
      "04e": "0.4em",
      "05e": "0.5em",
      "1e": "1em",
      sm: "var(--space-sm)",
      md: "var(--space-md)",
      lg: "var(--space-lg)",
      xl: "var(--space-xl)",
      xxl: "var(--space-xxl)",
      gutter: "var(--gutter)",
      "header-height": "var(--header-height)",
    },
    colors: {
      white: "#ffffff",
      red: "#ff0000",
      bg: "var(--color-bg)",
      primary: "var(--color-primary)",
    },
    fontSize: {
      sm: ["var(--text-sm)", "1"],
      md: ["var(--text-md)", "1.2"],
      lg: ["var(--text-lg)", "1"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeGrey: "#2A2A2A",
        themeBlack: "#000000",
        themeWhite: "#FFFFFF",
      },
      fontFamily: {
        moch: ["Mochiy Pop P One", "sans-serif"],
      },
    },
    screens: {
      "2xl": { min: "1280px" },
      // => @media (min-width: 1536px) { ... }
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};

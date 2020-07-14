module.exports = {
  theme: {
    screens: {
      xsm: "600px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    opacity: ["hover", "group-hover"],
  },
  plugins: [],
}

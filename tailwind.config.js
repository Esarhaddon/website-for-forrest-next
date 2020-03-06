module.exports = {
  // important: true,
  theme: {
    extend: {},
    screens: {
      xsm: "460px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px"
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    // borderWidth: ["focus"],
    // display: ["group-hover"],
    opacity: ["hover", "group-hover"]
    // textColor: ["hover", "group-hover"]
  },
  plugins: []
}

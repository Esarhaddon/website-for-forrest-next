module.exports = {
  purge: {
    content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
    options: {
      safelist: [
        "hover-text-transparent-dark",
        "hover-text-transparent-light",
        "text-white",
        "text-gray-900",
        "hover:text-gray-900",
        "hover:text-gray-white",
      ],
    },
  },
  theme: {
    screens: {
      xsm: "600px",
      sm: "700px",
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

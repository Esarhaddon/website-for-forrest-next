const tailwindcss = require("tailwindcss")
const purgecss = require("@fullhuman/postcss-purgecss")
module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    ...(process.env === "production"
      ? [
          purgecss({
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[w-/:]+(?<!:)/g) || [],
          }),
          require("cssnano"),
        ]
      : []),
    require("autoprefixer"),
  ],
}

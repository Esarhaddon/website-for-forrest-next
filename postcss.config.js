const tailwindcss = require("tailwindcss")
module.exports = {
  plugins: [
    // purging with tailwind as well
    tailwindcss("./tailwind.config.js"),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
    require("autoprefixer"),
  ],
}

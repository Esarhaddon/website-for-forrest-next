const tailwindcss = require("tailwindcss")
module.exports = {
  plugins: [
    // purging with tailwind as well
    tailwindcss("./tailwind.config.js"),
    ...(process.env === "production" ? [require("cssnano")] : []),
    require("autoprefixer"),
  ],
}

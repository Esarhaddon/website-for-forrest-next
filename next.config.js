require("dotenv").config()

const withCSS = require("@zeit/next-css")
module.exports = withCSS({
  env: {
    CONTENTFUL_API: process.env.CONTENTFUL_API,
    CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config
  }
})

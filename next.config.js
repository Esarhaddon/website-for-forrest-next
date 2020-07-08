require("dotenv").config()

const withCSS = require("@zeit/next-css")
module.exports = withCSS({
  env: {
    CONTENTFUL_API: process.env.CONTENTFUL_API,
    CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
    // you have to add these last as vercel (zeit) secrets
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_HOST: process.env.SMTP_HOST,
    MAILT_TO: process.env.MAILT_TO,
    NEXT_API: process.env.NEXT_API,
  },
})

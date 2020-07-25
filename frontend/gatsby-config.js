require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  siteMetadata: {
    title: `Ronald S. Cruz`,
    description: `My space to talk about personal experiences in the world of software development`,
    author: `Ronald S. Cruz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000,
        contentTypes: [`post`, `category`],
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASS,
        },
      },
    },
  ],
}

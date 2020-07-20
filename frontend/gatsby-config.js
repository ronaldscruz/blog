module.exports = {
  siteMetadata: {
    title: `Ronald S. Cruz`,
    description: `My private world to share content about software development`,
    author: `ronaldscruz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ronaldscruz-blog`,
        short_name: `ronaldscruz`,
        start_url: `/`,
        background_color: `#ecf0f1`,
        theme_color: `#2c3e50`,
        display: `minimal-ui`,
      },
    },
  ],
}

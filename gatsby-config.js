module.exports = {
  siteMetadata: {
    title: `Zeta Electrical`,
    description: `Zeta Electrical. For all your electrical needs.`,
    author: `Mogg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zeta Electrical`,
        short_name: `Zeta Electrical`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/ze-icon.svg`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}

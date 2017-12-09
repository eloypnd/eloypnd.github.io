module.exports = {
  siteMetadata: {
    title: `Eloy Pineda`,
    subtitle: `personal website`
  },
  plugins: [
    // plugins
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `9piDJZXdWSWuGluunr2oHJEOULx5fcWZ`,
        devKey: `obOuPkYlnuIgr1SQhV3UMMshUqXirOWq`,
        trackPage: true
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    // sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
}

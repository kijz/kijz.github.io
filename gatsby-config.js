module.exports = {
  proxy: {
    prefix: '/api',
    url: 'http://dev-mysite.com',
  },
  siteMetadata: {
    title: '✋Filip Kajzer • M.Sc. 💻 science',
    description: 'Personal website using Gatsby + TypeScript',
    author: 'Filip Kajzer <filipkajzer@gmail.com>',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/config/typography',
      },
    },
  ],
};

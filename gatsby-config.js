require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    THE_FLAG: false,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        rule: {
          omitKeys: [
            'width',
            'height',
          ],
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@genericPage': 'src/components/GenericPage',
          '@pages': 'src/pages',
          '@src': 'src',
          '@theme': 'src/theme',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#ffcc00',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
        name: 'Untitled Gatsby project',
        short_name: 'foo',
        start_url: '/',
        theme_color: '#ffcc00', // TODO: set these up
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: {
        id: process.env.GTM_ID,
      },
      resolve: 'gatsby-plugin-google-tagmanager',
    },
    'gatsby-plugin-styled-components',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Gatsby starter using Styled Components',
    title: 'Gatsby Starter with Styled Components',
  },
};

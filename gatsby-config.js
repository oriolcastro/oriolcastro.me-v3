const config = require('./src/meta/siteConfig');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-feed',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === 'production',
          position: 'displace',
        },
        plugins: [
          {
            resolve: 'gatsby-tinacms-git',
            options: {
              defaultCommitMessage: 'Content edited with TinaCMS',
              defaultCommitName: 'oriolcastro',
              defaultCommitEmail: 'oriol.castroarnau@gmail.com',
              pushOnCommit: false,
              sshKey: process.env.SSH_KEY,
            },
          },
          'gatsby-tinacms-remark',
        ],
      },
    },

    /*   {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/*"]
      }
    }, */
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-embed-spotify',
          '@weknow/gatsby-remark-twitter',
          {
            resolve: 'gatsby-remark-relative-images-v2',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              withWebp: true,
              showCaptions: true,
              linkImagesToOriginal: false,
              quality: 75,
            },
          },
          {
            resolve: 'gatsby-remark-relative-links',
            options: {
              domainRegex: /http[s]*:\/\/[www.]*oriolcastro\.me[/]?/,
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        // Url to query from
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.app/env-vars
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@templates': 'src/templates',
        },
        extensions: ['js', 'jsx'],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};

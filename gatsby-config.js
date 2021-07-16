const config = require('./src/meta/siteConfig');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    defaultTitle: config.siteTitle,
    titleTemplate: "%s · Oriol's Blog",
    defaultDescription: config.siteDescription,
    siteUrl: config.siteUrl,
    twitterUsername: config.userTwitter,
  },
  flags: {
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    FAST_REFRESH: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-remark-images',
    'gatsby-plugin-mdx-embed',
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
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
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/templates/page.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              withWebp: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              quality: 75,
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'oriolcastro.me',
        short_name: 'oriolcastro.me',
        description: config.siteDescription,
        lang: `en`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/img/icon.png',
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/portfolio`, `/about`],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};

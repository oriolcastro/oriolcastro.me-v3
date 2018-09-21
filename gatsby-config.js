module.exports = {
  siteMetadata: {
    title: "Oriol Castro",
    description: "Blog personal on escric sobre tecnologia i canvi social.",
    siteURL: "https://oriolcastro.me"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-feed",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          "gatsby-remark-embed-spotify",
          {
            resolve: `gatsby-remark-relative-images-v2`
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
              withWebp: true,
              linkImagesToOriginal: false,
              quality: 75
            }
          },
          {
            resolve: "gatsby-remark-external-links"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

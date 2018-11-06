const _ = require("lodash");
const graphql = require("gatsby");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "about-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }
      const pages = result.data.allMarkdownRemark.edges;
      pages.forEach((edge, i) => {
        const id = edge.node.id;
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(`src/templates/about-page.js`),
          context: {
            id
          }
        });
      });
      resolve();
    });
  });

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          sort: { order: ASC, fields: frontmatter___date }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach((edge, i) => {
        const id = edge.node.id;
        const prev = i === 0 ? null : posts[i - 1].node;
        const next = i === posts.length - 1 ? null : posts[i + 1].node;
        const slug = edge.node.fields.slug;
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(`src/templates/blog-post.js`),
          // additional data can be passed via context
          context: {
            id,
            prev,
            next,
            slug
          }
        });
      });

      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`;

        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/tags.js`),
          context: {
            tag
          }
        });
      });
      resolve();
    });
  });
  return Promise.all([loadPages, loadPosts]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

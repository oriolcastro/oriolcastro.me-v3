const get = require('lodash/get');
const uniq = require('lodash/uniq');
const kebabCase = require('lodash/kebabCase');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog.js`);
  const blogData = await graphql(`
    {
      allMdx(
        limit: 1000
        sort: { order: ASC, fields: frontmatter___date }
        filter: { fields: { type: { eq: "blog" } } }
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
  `);

  if (blogData.errors) {
    blogData.errors.forEach((e) => console.error(e.toString()));
    throw blogData.error;
  }

  // Create blog post pages
  const posts = blogData.data.allMdx.edges;

  posts.forEach((post, i) => {
    const { id } = post.node;
    const prev = i === 0 ? null : posts[i - 1].node;
    const next = i === posts.length - 1 ? null : posts[i + 1].node;

    createPage({
      path: post.node.fields.slug,
      tags: post.node.frontmatter.tags,
      component: blogPostTemplate,
      // additional data can be passed via context
      context: {
        id,
        prev,
        next,
        slug: post.node.fields.slug,
      },
    });
  });

  // Tag pages:
  let tags = [];
  const tagsPageTemplate = path.resolve(`src/templates/tags.js`);
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((post) => {
    if (get(post, `node.frontmatter.tags`)) {
      tags = tags.concat(post.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = uniq(tags);

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${kebabCase(tag)}`;
    createPage({
      path: tagPath,
      component: tagsPageTemplate,
      context: {
        tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== `Mdx`) {
    return;
  }
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === 'blog') {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'content/blog/',
      trailingSlash: false,
    });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${relativeFilePath}`,
    });
    createNodeField({
      name: `type`,
      node,
      value: source,
    });
  }
};

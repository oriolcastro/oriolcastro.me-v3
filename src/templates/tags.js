import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from 'gatsby';

import { Header, List } from 'semantic-ui-react';

import Layout from '@components/layout';

const TagRoute = ({ data, tag }) => {
  const posts = data.allMarkdownRemark.edges;
  const { title } = data.site.siteMetadata;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} amb l'etiqueta “${tag}”`;

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />
      <Header as="h3" style={{ marginTop: '24px' }}>
        {tagHeader}
      </Header>
      <List as="ul" size="huge">
        {posts.map(post => (
          <List.Item as="li" key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </List.Item>
        ))}
      </List>
      <p>
        <Link to="/tags/">Explora totes les etiquetes</Link>
      </p>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

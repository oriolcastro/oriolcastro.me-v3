import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

import { graphql, Link } from 'gatsby';

import Layout from '@components/Layout';

const TagRoute = ({ data, pageContext: { tag } }) => {
  const {
    site: {
      siteMetadata: { title },
    },
    allMdx: { totalCount, edges: posts },
  } = data;
  const tagHeader = useMemo(
    () => `${totalCount} post${totalCount === 1 ? '' : 's'} with the tag “${tag}”`,
    [totalCount, tag]
  );

  return (
    <Layout>
      <Helmet>
        <title>{`${tag} | ${title}`}</title>
      </Helmet>
      <h2 className="mb-6">{tagHeader}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      <Link className="no-underline text-primary" to="/tags">
        Explore all categories
      </Link>
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
    allMdx(
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

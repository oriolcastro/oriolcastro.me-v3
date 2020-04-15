/** @jsx jsx */
import { useMemo } from 'react';
import { Helmet } from 'react-helmet';

import { graphql, Link } from 'gatsby';

import { Heading, jsx, Styled } from 'theme-ui';

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
      <Heading as="h2" sx={{ mb: 4 }}>
        {tagHeader}
      </Heading>
      <Styled.ul>
        {posts.map((post) => (
          <Styled.li key={post.node.fields.slug}>
            <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          </Styled.li>
        ))}
      </Styled.ul>
      <Styled.a as={Link} to="/tags">
        Explore all categories
      </Styled.a>
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

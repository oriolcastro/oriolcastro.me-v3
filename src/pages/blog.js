/** @jsx jsx */
import { Helmet } from 'react-helmet';

import { graphql } from 'gatsby';

import { Grid, Heading, jsx } from 'theme-ui';

import Layout from '@components/Layout';
import PostCard from '@components/PostCard';

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Helmet>
        <title>{`${data.site.siteMetadata.title} - Blog`}</title>
      </Helmet>
      <Heading as="h1" sx={{ mb: 5 }}>
        Blog
      </Heading>
      <Grid gap={[4, 5]} columns={1} sx={{ py: 3 }}>
        {posts.map(({ node: post }) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 450)
          timeToRead
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "en")
            description
            tags
            coverImg {
              childImageSharp {
                fluid(maxWidth: 980, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

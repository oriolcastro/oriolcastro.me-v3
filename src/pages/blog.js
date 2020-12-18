/** @jsx jsx */
import { graphql } from 'gatsby';

import { Grid, Heading, jsx } from 'theme-ui';

import Layout from '@components/Layout';
import PostCard from '@components/PostCard';
import SEO from '@components/SEO';

const BlogPage = ({ data, path }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Latest articles" description="Latest articles in my blog" pathname={path} />
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
      filter: { fields: { type: { eq: "blog" } }, frontmatter: { status: { eq: "published" } } }
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
                gatsbyImageData(
                  maxWidth: 980
                  maxHeight: 400
                  placeholder: TRACED_SVG
                  layout: FLUID
                )
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

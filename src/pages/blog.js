import React from 'react';

import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PostCard from '@components/PostCard';
import SEO from '@components/SEO';

const BlogPage = ({ data, path }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Latest articles" description="Latest articles in my blog" pathname={path} />
      <h1 className="mb-8 font-bold text-4xl">Blog</h1>
      <div className="grid gap-6 grid-cols-1 py-4 lg:gap-8 lg:grid-cols-2">
        {posts.map(({ node: post }) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
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

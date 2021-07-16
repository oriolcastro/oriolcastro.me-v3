import React from 'react';

import { graphql } from 'gatsby';

import PropTypes from 'prop-types';

import Hero from '@components/Hero';
import Layout from '@components/Layout';
import PostCard from '@components/PostCard';
import SEO from '@components/SEO';
import Status from '@components/Status';
import Timeline from '@components/Timeline';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <SEO title="Hi!" />
      <Hero />
      <Status />
      <Timeline />
      {posts.length ? (
        <div className="py-6">
          <h2 className="mb-8">Featured articles</h2>
          <div className="grid gap-6 grid-cols-1 py-4 lg:gap-8 lg:grid-cols-2">
            {posts.map(({ node: post }) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fields: { type: { eq: "blog" } }
        frontmatter: { status: { eq: "published" }, isFeatured: { eq: true } }
      }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          timeToRead
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "ca")
            description
            tags
            coverImg {
              childImageSharp {
                gatsbyImageData(
                  maxWidth: 350
                  maxHeight: 150
                  placeholder: TRACED_SVG
                  layout: FLUID
                )
              }
            }
          }
        }
      }
    }
  }
`;

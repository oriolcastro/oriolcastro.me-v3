/* eslint-disable react/display-name */
import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { MDXProvider } from '@mdx-js/react';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Badge, Box, Heading, Text } from 'theme-ui';

import CodeBlock from '@components/CodeBlock';
import Layout from '@components/Layout';
import PostLinks from '@components/PostLinks';
import Profile from '@components/Profile';
import SocialShare from '@components/SocialShare';

const shortcodes = { Link, pre: (props) => <div {...props} />, code: CodeBlock }; // Provide common components here

const BlogPost = ({ data, pageContext }) => {
  const {
    mdx: { body, frontmatter },
  } = data;
  const { next, prev } = pageContext;
  const url = `https://oriolcastro.me${pageContext.slug}`;
  return (
    <Layout>
      <Helmet>
        <title>{`${frontmatter.title} | Blog`}</title>
      </Helmet>
      {frontmatter.coverImg && <Img fluid={frontmatter.coverImg.childImageSharp.fluid} />}
      <Heading as="h1">{frontmatter.title}</Heading>
      <Text>{frontmatter.description}</Text>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      {frontmatter.tags?.length && (
        <Box mt="4rem" mb="4rem">
          <Heading as="h4">Topics</Heading>
          {frontmatter.tags.map((tag) => (
            <Link to={`/tags/${kebabCase(tag)}/`} key={tag}>
              <Badge>{tag}</Badge>
            </Link>
          ))}
        </Box>
      )}
      <SocialShare url={url} title={frontmatter.title} tags={frontmatter.tags} />
      <PostLinks prev={prev} next={next} />
      <Profile isBlogPost />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
};

BlogPost.defaultProps = {
  data: {},
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByIDMdx($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "DD MMMM DD YYYY", locale: "en")
        title
        description
        tags
        coverImg {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

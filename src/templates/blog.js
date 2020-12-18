/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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

const BlogTemplate = ({ data, pageContext }) => {
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
      {frontmatter.coverImg && (
        <GatsbyImage image={frontmatter.coverImg.childImageSharp.gatsbyImageData} />
      )}
      <Box sx={{ py: 4 }}>
        <Heading as="h1">{frontmatter.title}</Heading>
        <Text variant="blogDescription">{frontmatter.description}</Text>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
      {frontmatter.tags?.length && (
        <Box mb={5}>
          <Heading as="h4" mb={3}>
            Tags
          </Heading>
          {frontmatter.tags.map((tag) => (
            <Badge variant="light" as={Link} to={`/tags/${kebabCase(tag)}/`} key={tag}>
              {tag}
            </Badge>
          ))}
        </Box>
      )}
      <Profile />
      <SocialShare url={url} title={frontmatter.title} tags={frontmatter.tags} />
      <PostLinks prev={prev} next={next} />
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
};

BlogTemplate.defaultProps = {
  data: {},
};

export default BlogTemplate;

export const postQuery = graphql`
  query BlogPostByID($id: String!) {
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
            gatsbyImageData(maxWidth: 1400, maxHeight: 700, placeholder: TRACED_SVG, layout: FLUID)
          }
        }
      }
    }
  }
`;

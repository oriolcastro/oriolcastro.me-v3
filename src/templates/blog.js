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
      <div className="py-6">
        <h1 className="font-bold text-4xl">{frontmatter.title}</h1>
        <p
          className="text-lg my-6 px-2 border-l border-accent text-justify italic"
          variant="blogDescription"
        >
          {frontmatter.description}
        </p>
        <div className="prose lg:prose-lg max-w-none">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
      {frontmatter.tags?.length && (
        <div className="mb-8">
          <h4 className="mb-4 font-bold text-lg">Tags</h4>
          {frontmatter.tags.map((tag) => (
            <Link
              className="text-lightText bg-muted font-normal rounded p-1 m-1"
              to={`/tags/${kebabCase(tag)}/`}
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
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

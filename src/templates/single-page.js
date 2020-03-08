import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Content, { HTMLContent } from '@components/Content';
import CVButtons from '@components/CVButtons';
import Layout from '@components/layout';

export const SinglePageTemplate = ({ title, content, contentComponent, coverImg }) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <Img fluid={coverImg} />
      <Header as="h1">{title}</Header>
      <PageContent className="pageContent" content={content} />
      {title === 'Una mica sobre mi' && <CVButtons />}
    </>
  );
};
SinglePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
};

const SinglePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title} - Sobre mi</title>
      </Helmet>
      <SinglePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        coverImg={post.frontmatter.coverImg.childImageSharp.fluid}
        content={post.html}
      />
    </Layout>
  );
};

SinglePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default SinglePage;

export const singlePageQuery = graphql`
  query SinglePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        coverImg {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

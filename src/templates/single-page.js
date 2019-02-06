import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Header } from "semantic-ui-react";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export const SinglePageTemplate = ({
  title,
  content,
  contentComponent,
  thumbnail
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <Img fluid={thumbnail} />
      <Header as="h1">{title}</Header>
      <PageContent className="pageContent" content={content} />
    </>
  );
};
SinglePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
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
        thumbnail={post.frontmatter.thumbnail.childImageSharp.fluid}
        content={post.html}
      />
    </Layout>
  );
};

SinglePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SinglePage;

export const singlePageQuery = graphql`
  query SinglePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 300) {
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

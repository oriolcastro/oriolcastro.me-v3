import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { inlineRemarkForm } from 'gatsby-tinacms-remark';

import get from 'lodash/get';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { Button } from 'theme-ui';

import Content, { HTMLContent } from '@components/Content';
import CVButtons from '@components/CVButtons';
import Layout from '@components/layout';

const path = require('path').posix;

const FormConfig = {
  label: 'Una mica sobre mi',
  fields: [
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      description: 'The title of the page',
      component: 'text',
    },
    {
      label: `Featured Image`,
      name: `rawFrontmatter.coverImg`,
      component: `image`,
      // function to convert uploaded images.
      parse: filename => `${filename}`,
      previewSrc: (formValues, { input }) => {
        const p = input.name.replace('rawFrontmatter', 'frontmatter');
        const gatsbyImageNode = get(formValues, p);
        if (!gatsbyImageNode) return '';
        // specific to gatsby-image
        return gatsbyImageNode.childImageSharp.fluid.src;
      },
      uploadDir: page => path.dirname(page.fileRelativePath),
    },
    {
      label: `Content`,
      name: `rawMarkdownBody`,
      description: `Write the content for the page here`,
      component: `markdown`,
    },
  ],
};

export const SinglePageTemplate = ({
  title,
  content,
  contentComponent,
  coverImg,
  isEditing,
  setIsEditing,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <Img fluid={coverImg} />
      <Header as="h1">{title}</Header>
      {process.env.NODE_ENV === 'development' && (
        <Button type="button" onClick={() => setIsEditing(p => !p)}>
          {isEditing ? 'Preview' : 'Edit'}
        </Button>
      )}
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

const SinglePage = ({ data, isEditing, setIsEditing }) => {
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
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </Layout>
  );
};

SinglePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default inlineRemarkForm(SinglePage, FormConfig);

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
      ...TinaRemark
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

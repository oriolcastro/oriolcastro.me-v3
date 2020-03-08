import React from 'react';
import Helmet from 'react-helmet';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { inlineRemarkForm } from 'gatsby-tinacms-remark';

import get from 'lodash/get';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Header, Label } from 'semantic-ui-react';

import Content, { HTMLContent } from '@components/Content';
import Layout from '@components/layout';
import PostLinks from '@components/PostLinks';
import Profile from '@components/Profile';
import SocialShare from '@components/SocialShare';

const path = require('path').posix;

const FormConfig = {
  label: 'Blog Post',
  fields: [
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      description: 'The title of this post',
      component: 'text',
    },
    {
      label: `Date Published`,
      name: `rawFrontmatter.date`,
      description: `The date the post was published.`,
      component: `date`,
      dateFormat: `YYYY-MM-DD`,
      timeFormat: false,
    },
    {
      label: 'Description',
      name: 'rawFrontmatter.description',
      description: 'Short asbtract for the post',
      component: 'textarea',
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
      uploadDir: blogPost => path.dirname(blogPost.fileRelativePath),
    },
    {
      label: `Content`,
      name: `rawMarkdownBody`,
      description: `Write your blog post here!`,
      component: `markdown`,
    },
  ],
};

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  thumbnail,
  isEditing,
  setIsEditing,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}
      {thumbnail && <Img fluid={thumbnail} />}
      <Header as="h1">
        {title}
        <Header.Subheader>{description}</Header.Subheader>
      </Header>
      {process.env.NODE_ENV === 'development' && (
        <button type="button" onClick={() => setIsEditing(p => !p)}>
          {isEditing ? 'Preview' : 'Edit'}
        </button>
      )}
      <PostContent content={content} className="blogContent" />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem`, marginBottom: '4rem' }}>
          <Header as="h4">Etiquetes</Header>
          {tags.map(tag => (
            <Link to={`/tags/${kebabCase(tag)}/`} key={tag}>
              <Label as="a" tag style={{ margin: '8px' }}>
                {tag}
              </Label>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};
BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.instanceOf(Helmet).isRequired,
};

const BlogPost = ({ data, pageContext, isEditing, setIsEditing }) => {
  const { markdownRemark: post } = data;
  const hasThumbnail = post.frontmatter.coverImg;
  const previous = pageContext.prev;
  const { next } = pageContext;
  const url = `https://oriolcastro.me${pageContext.slug}`;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        thumbnail={hasThumbnail && post.frontmatter.coverImg.childImageSharp.fluid}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <SocialShare url={url} title={post.frontmatter.title} hastags={post.frontmatter.tags} />
      <PostLinks previous={previous} next={next} />
      <Profile isBlogPost />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

BlogPost.defaultProps = {
  data: {},
};

export default inlineRemarkForm(BlogPost, FormConfig);

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM DD YYYY", locale: "ca")
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
      ...TinaRemark
    }
  }
`;

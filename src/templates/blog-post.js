import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Header, Label } from "semantic-ui-react";

import { kebabCase } from "lodash";

import Profile from "../components/Profile";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/layout";
import PostLinks from "../components/PostLinks";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ""}
      <Header as="h1">
        {title}
        <Header.Subheader>{description}</Header.Subheader>
      </Header>

      <PostContent content={content} className="blogContent" />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem`, marginBottom: "4rem" }}>
          <Header as="h4">Etiquetes</Header>
          {tags.map(tag => (
            <Link to={`/tags/${kebabCase(tag)}/`}>
              <Label as="a" tag style={{ margin: "8px" }}>
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
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const previous = pageContext.prev;
  const next = pageContext.next;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <PostLinks previous={previous} next={next} />
      <Profile isBlogPost={true} />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

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
      }
    }
  }
`;

import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import { Header, Card, Label } from "semantic-ui-react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title} - Blog</title>
      </Helmet>
      <Header as="h1" style={{ marginBottom: "24px" }}>
        Blog
      </Header>
      <Card.Group itemsPerRow="1" stackable>
        {posts.map(({ node: post }) => (
          <Card key={post.id}>
            <Card.Content>
              <Card.Header>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </Card.Header>
              <Card.Meta>
                {post.frontmatter.date} - {post.timeToRead} min
              </Card.Meta>
              <Card.Description style={{ textAlign: "justify" }}>
                {post.frontmatter.description}
                <br />
                <Link to={post.fields.slug}>Llegeix més</Link>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {post.frontmatter.tags.map(tag => (
                <Link to={`/tags/${kebabCase(tag)}/`}>
                  <Label as="a" tag style={{ margin: "8px" }}>
                    {tag}
                  </Label>
                </Link>
              ))}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            templateKey
            date(formatString: "DD MMMM YYYY", locale: "ca")
            description
            tags
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

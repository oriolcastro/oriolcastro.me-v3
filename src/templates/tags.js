import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import { Header, List } from "semantic-ui-react";

import Layout from "../components/layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <List.Item as="li" key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      </List.Item>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } amb l'etiqueta “${tag}”`;

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <Header as="h3" style={{ marginTop: "24px" }}>
          {tagHeader}
        </Header>
        <List as="ul" size="huge">
          {postLinks}
        </List>
        <p>
          <Link to="/tags/">Explora totes les etiquetes</Link>
        </p>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

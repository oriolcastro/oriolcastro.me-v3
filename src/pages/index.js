import React from 'react';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { kebabCase } from 'lodash';
import PropTypes from 'prop-types';
import { Card, Container, Header, Label } from 'semantic-ui-react';

import Layout from '@components/layout';
import Profile from '@components/Profile';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <Profile isBlogPost={false} />
      <Header as="h1" dividing style={{ marginBottom: '24px' }}>
        Últims articles
      </Header>
      <Container>
        <Card.Group itemsPerRow="2" stackable>
          {posts.map(({ node: post }) => (
            <Card key={post.id}>
              {post.frontmatter.coverImg && (
                <Img fluid={post.frontmatter.coverImg.childImageSharp.fluid} />
              )}
              <Card.Content>
                <Card.Header>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Card.Header>
                <Card.Meta>
                  {post.frontmatter.date} - {post.timeToRead} min
                </Card.Meta>
                <Card.Description className="cardDescription">
                  {post.frontmatter.description}
                  <br />
                  <Link to={post.fields.slug}>Llegeix més</Link>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {post.frontmatter.tags.map(tag => (
                  <Link to={`/tags/${kebabCase(tag)}/`}>
                    <Label as="a" tag style={{ margin: '8px' }}>
                      {tag}
                    </Label>
                  </Link>
                ))}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 4
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
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
            coverImg {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 150) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

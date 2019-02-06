import React from "react";
import { graphql } from "gatsby";
import { Header, Container, Card, Button, Label } from "semantic-ui-react";
import { IconContext } from "react-icons";
import { FaExternalLinkSquareAlt, FaCode } from "react-icons/fa";
import Img from "gatsby-image";

import Layout from "../components/layout";

const PortfolioPage = props => {
  const { edges: repos } = props.data.github.user.repositories;
  const HeroImage = props.data.file.childImageSharp.fluid;

  return (
    <Layout>
      <Img fluid={HeroImage} />
      <Header as="h1" style={{ marginBottom: "24px" }}>
        Portfoli
      </Header>
      <Container>
        <Card.Group itemsPerRow="2" stackable>
          {repos.map(({ node: repo }) => (
            <Card key={repo.id}>
              <Card.Content>
                <Card.Header style={{ textTransform: "capitalize" }}>
                  {repo.name}
                </Card.Header>
                <Card.Description>
                  <p style={{ marginBottom: "16px", height: "3rem" }}>
                    {repo.description}
                  </p>
                  <Button
                    basic
                    color="blue"
                    href={repo.homepageUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "text-top",
                          marginRight: "8px"
                        },
                        size: "1.15em"
                      }}
                    >
                      <FaExternalLinkSquareAlt />
                    </IconContext.Provider>
                    Projecte
                  </Button>
                  <Button
                    secondary
                    href={repo.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "text-top",
                          marginRight: "8px"
                        },
                        size: "1.15em"
                      }}
                    >
                      <FaCode />
                    </IconContext.Provider>
                    Codi
                  </Button>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {repo.repositoryTopics.edges.map(node => (
                  <Label>{node.topic.name}</Label>
                ))}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;

export const query = graphql`
  query PortfolioPageQuery {
    file(name: { eq: "portfoliHero" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    github {
      user(login: "oriolcastro") {
        repositories(
          orderBy: { field: CREATED_AT, direction: DESC }
          isFork: false
          first: 10
        ) {
          edges {
            node {
              id
              name
              description
              url
              homepageUrl
              repositoryTopics(first: 5) {
                edges {
                  node {
                    id
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import { graphql, Link } from "gatsby";
import { Header, Container } from "semantic-ui-react";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-gtag";

import Layout from "../components/layout";
import GithubCards from "../components/GithubCards";
import CVButtons from "../components/CVButtons";

const PortfolioPage = props => {
  const { edges: repos } = props.data.github.user.repositories;
  const HeroImage = props.data.file.childImageSharp.fluid;

  return (
    <Layout>
      <Img fluid={HeroImage} />
      <Header as="h1" style={{ marginBottom: "24px" }}>
        Portfoli
      </Header>
      <Container
        textAlign="justified"
        content
        text
        style={{ marginBottom: "24px", whiteSpace: "pre-line" }}
      >
        <p>
          Aquí podeu consultar els últims projectes en que he treballat ja sigui
          pel meu compte o com a desenvolupador web freelance per a diferents
          clients.{"\n"}
          Tot el codi està allotjat al meu compte de Github i és consultable.
          També podeu veure el resultat final de cada projecte.{"\n"}
          Si voleu més informció podeu llegir els articles del meu{" "}
          <Link to="/blog">blog</Link> o els apartats de{" "}
          <OutboundLink
            href="https://www.okstudio.tech/projectes"
            target="_blank"
          >
            projectes
          </OutboundLink>{" "}
          i{" "}
          <OutboundLink href="https://www.okstudio.tech/lab" target="_blank">
            el LAB
          </OutboundLink>{" "}
          de la web d'Ok! Studio.
        </p>
      </Container>
      <GithubCards repos={repos} />
      <CVButtons />
    </Layout>
  );
};

export default PortfolioPage;

export const query = graphql`
  query PortfolioPageQuery {
    file(name: { eq: "portfoliHero" }) {
      childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 700) {
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

/** @jsx jsx */
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Box, Grid, Heading, jsx, Styled, Text } from 'theme-ui';

import CVButtons from '@components/CVButtons';
import GithubCard from '@components/GithubCard';
import Layout from '@components/Layout';
import SEO from '@components/SEO';

const PortfolioPage = ({ data }) => {
  const { edges: repos } = data.github.user.repositories;
  const HeroImage = data.file.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title="My projects"
        desription="Some of the projects I have been working as a front-end developer"
        pathname="/portfolio"
      />
      <Img fluid={HeroImage} />
      <Box sx={{ py: 4 }}>
        <Heading as="h1" sx={{ mb: 5 }}>
          Projects
        </Heading>
        <Text sx={{ whiteSpace: 'pre-line' }}>
          If you want to know how do I code, check out my latest projects!
          {'\n'}
          All the code is publicly available in my Github profile, you can also see a hosted demo of
          some of them. If you want to read a more in deep explanation you can go to the
          <Styled.a as={Link} to="/blog">
            {' blog '}
          </Styled.a>
          section or the
          <Styled.a as={OutboundLink} href="https://www.okstudio.tech/projectes" target="_blank">
            {' projects '}
          </Styled.a>
          and
          <Styled.a as={OutboundLink} href="https://www.okstudio.tech/lab" target="_blank">
            {' The LAB '}
          </Styled.a>
          sections of my (currently on hiatus) freelancing job website, Ok! Studio
        </Text>
        <Grid gap={[4, 5]} columns={[1, 2]} sx={{ py: 3 }}>
          {repos.map(({ node: repo }) => (
            <GithubCard key={repo.id} repo={repo} />
          ))}
        </Grid>
        <CVButtons />
      </Box>
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
        repositories(orderBy: { field: CREATED_AT, direction: DESC }, isFork: false, first: 10) {
          edges {
            node {
              id
              name
              description
              url
              homepageUrl
              repositoryTopics(first: 4) {
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

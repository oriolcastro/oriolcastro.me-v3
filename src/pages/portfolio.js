/** @jsx jsx */
import { graphql, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Box, Grid, Heading, jsx, Styled, Text } from 'theme-ui';

import CVButtons from '@components/CVButtons';
import GithubCard from '@components/GithubCard';
import Layout from '@components/Layout';
import SEO from '@components/SEO';

const PortfolioPage = ({ data, path }) => {
  const { edges: repos } = data.github.user.repositories;
  const HeroImage = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <SEO
        title="My projects"
        description="Some of the projects I have been working on as a front-end developer"
        pathname={path}
        image={data.file.childImageSharp.original.src}
      />
      <GatsbyImage image={HeroImage} />
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
        gatsbyImageData(maxWidth: 1400, maxHeight: 700, placeholder: TRACED_SVG, layout: FLUID)
        original: fluid {
          src
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

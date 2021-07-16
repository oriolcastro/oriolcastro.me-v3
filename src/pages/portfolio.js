import React from 'react';

import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
      <div className="py-6">
        <h1 className="mb-8 text-4xl font-bold">Projects</h1>
        <p className="whitespace-pre-line text-base">
          If you want to know how do I code, check out my latest projects!
          {'\n'}
          All the code is publicly available in my Github profile, you can also see a hosted demo of
          some of them. If you want to read a more in deep explanation you can go to the
          <Link className="no-underline text-primary" to="/blog">
            {' blog '}
          </Link>
          section or the
          <a
            href="https://www.okstudio.tech/projectes"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="no-underline text-primary"
          >
            {' projects '}
          </a>
          and
          <a
            href="https://www.okstudio.tech/lab"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="no-underline text-primary"
          >
            {' The LAB '}
          </a>
          sections of my (currently on hiatus) freelancing job website, Ok! Studio
        </p>
        <div className="grid gap-6 grid-cols-1 py-4 lg:gap-8 lg:grid-cols-2">
          {repos.map(({ node: repo }) => (
            <GithubCard key={repo.id} repo={repo} />
          ))}
        </div>
        <CVButtons />
      </div>
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

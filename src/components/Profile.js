import React from 'react';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-gtag';

import { Grid, Header } from 'semantic-ui-react';

const Profile = ({ isBlogPost }) => {
  return (
    <Grid columns={2} centered verticalAlign="middle">
      <Grid.Column computer={6} tablet={6} mobile={10}>
        <StaticQuery
          query={graphql`
            query ProfileQuery {
              profileImage: imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
                fluid(maxWidth: 650) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          `}
          render={data => (
            <>
              {isBlogPost ? (
                <Img
                  fluid={data.profileImage.fluid}
                  title="My profile"
                  alt="La meva foto de perfil"
                  className="profileImageSmall"
                />
              ) : (
                <Img
                  fluid={data.profileImage.fluid}
                  title="My profile"
                  alt="La meva foto de perfil"
                  className="profileImageCircular"
                />
              )}
            </>
          )}
        />
      </Grid.Column>
      <Grid.Column computer={8} tablet={8} mobile={14}>
        {isBlogPost ? (
          <Header size="medium">
            Oriol Castro
            <Header.Subheader style={{ textAlign: 'justify' }}>
              Sóc programador web front-end, emprenedor digital i entusiasta tecnològic. En aquest
              blog escric sobre els meus projectes, noves tecnologies i canvi social. Treballo a{' '}
              <OutboundLink href="https://okstudio.tech">OK! Studio</OutboundLink>.
            </Header.Subheader>
          </Header>
        ) : (
          <>
            <Header as="h1">Benvinguts al meu blog!</Header>
            <Header size="tiny" textAlign="justified">
              Sóc programador web front-end, emprenedor digital i entusiasta tecnològic. En aquest
              blog escric sobre els meus projectes, noves tecnologies i canvi social. Treballo a{' '}
              <OutboundLink
                href="https://okstudio.tech"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                OK! Studio
              </OutboundLink>
              .
            </Header>
          </>
        )}
        <div>
          <OutboundLink
            href="https://twitter.com/oriolcastro_"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {/* //<Icon name="twitter" circular link /> */}
            <IconContext.Provider value={{ className: 'iconCircular' }}>
              <FaTwitter />
            </IconContext.Provider>
          </OutboundLink>
          <OutboundLink
            href="https://www.instagram.com/oriolcastro_/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconContext.Provider value={{ className: 'iconCircular' }}>
              <FaInstagram />
            </IconContext.Provider>
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/oriolcaar/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconContext.Provider value={{ className: 'iconCircular' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </OutboundLink>
          <OutboundLink
            href="https://github.com/oriolcastro"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconContext.Provider value={{ className: 'iconCircular' }}>
              <FaGithub />
            </IconContext.Provider>
          </OutboundLink>
          <OutboundLink href="mailto:uri@oriolcastro.me" rel="nofollow noopener noreferrer">
            <IconContext.Provider value={{ className: 'iconCircular' }}>
              <FaEnvelope />
            </IconContext.Provider>
          </OutboundLink>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Profile;

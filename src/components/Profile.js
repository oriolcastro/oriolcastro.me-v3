import React from "react";
import { Grid, Image, Header, Icon } from "semantic-ui-react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ProfilePic from "../img/me.jpg";

const Profile = ({ isBlogPost }) => {
  return (
    <Grid columns={2} centered verticalAlign="middle">
      <Grid.Column computer={6} tablet={6} mobile={10}>
        <StaticQuery
          query={graphql`
            query ProfileQuery {
              profileImage: imageSharp(original: { src: { regex: "/me/" } }) {
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
            <Header.Subheader style={{ textAlign: "justify" }}>
              Sóc programador web front-end, emprenedor digital i entusiasta
              tecnològic. En aquest blog escric sobre tecnologia i canvi social.
              Treballo a <a href="https://okstudio.tech">OK! Studio</a>.
            </Header.Subheader>
          </Header>
        ) : (
          <>
            <Header as="h1">Benvinguts al meu blog!</Header>
            <Header size="tiny" style={{ textAlign: "justify" }}>
              Sóc programador web front-end, emprenedor digital i entusiasta
              tecnològic. En aquest blog escric sobre tecnologia i canvi social.
              Treballo a{" "}
              <a
                href="https://okstudio.tech"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                OK! Studio
              </a>
              .
            </Header>
          </>
        )}
        <div>
          <a
            href="https://twitter.com/oriolcastro_"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon name="twitter" circular link />
          </a>
          <a
            href="https://www.instagram.com/oriolcastro_/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon name="instagram" circular link />
          </a>
          <a
            href="https://www.linkedin.com/in/oriolcaar/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon name="linkedin" circular link />
          </a>
          <a
            href="https://github.com/oriolcastro"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon name="github" circular link />
          </a>
          <a
            href="mailto:uri@oriolcastro.me"
            rel="nofollow noopener noreferrer"
          >
            <Icon name="envelope" circular link />
          </a>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Profile;

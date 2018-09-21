import React from "react";
import { Container, Icon } from "semantic-ui-react";
const Footer = () => (
  <Container
    text
    style={{
      marginTop: "24px",
      marginBottom: "24px",
      borderTop: "solid 1px gray "
    }}
  >
    Made with <Icon name="heart" color="red" /> in Vilanova.
    <br />
    <Icon name="code" color="blue" /> using{" "}
    <a
      href="https://www.gatsbyjs.org/"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Gatsby
    </a>{" "}
    and{" "}
    <a
      href="https://reactjs.org/"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      React
    </a>
    , styled with{" "}
    <a
      href="https://semantic-ui.com/"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {" "}
      Semantic-UI
    </a>{" "}
    and delivered by{" "}
    <a
      href="https://www.netlify.com/"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Netlify
    </a>
    .
  </Container>
);

export default Footer;

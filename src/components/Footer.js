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
    Made with <Icon name="heart" color="red" /> in Vilanova
  </Container>
);

export default Footer;

import React from "react";
import { Link } from "gatsby";
import { Menu, Container } from "semantic-ui-react";

const Navbar = () => (
  <Menu size="massive" borderless style={{ borderRadius: "inherit" }}>
    <Container text>
      <Menu.Item header as={Link} to={"/"}>
        Oriol Castro
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="Sobre mi" as={Link} to="/about" />
        <Menu.Item name="Blog" as={Link} to="/" />
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Navbar;

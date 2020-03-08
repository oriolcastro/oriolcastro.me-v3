import React from 'react';

import { Link } from 'gatsby';

import { Container, Menu } from 'semantic-ui-react';

import Emoji from './Emoji';

const Navbar = () => (
  <Menu size="massive" borderless style={{ borderRadius: 'inherit', marginBottom: '4rem' }}>
    <Container text>
      <Menu.Item header as={Link} to="/">
        <Emoji symbol="👌" label="ok" /> Oriol Castro
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/portfolio">
          Portfoli
        </Menu.Item>
        <Menu.Item as={Link} to="/una-mica-sobre-mi">
          Sobre mi
        </Menu.Item>
        <Menu.Item as={Link} to="/blog">
          Blog
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Navbar;

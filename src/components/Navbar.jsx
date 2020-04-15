/** @jsx jsx */
import { Link } from 'gatsby';

import { Box, Container, Flex, jsx, NavLink } from 'theme-ui';

import ThemeSwitch from './ThemeSwitch';

const Navbar = () => (
  <Container sx={{ mb: 4 }}>
    <Flex as="nav" sx={{ padding: 3, alignItems: 'center' }}>
      <Box sx={{ flex: 1 }}>
        <NavLink as={Link} variant="logo" to="/">
          Oriol
        </NavLink>
      </Box>
      <Flex>
        <NavLink as={Link} to="/portfolio">
          Projects
        </NavLink>
        <NavLink as={Link} to="/about">
          About
        </NavLink>
        <NavLink as={Link} to="/blog">
          Blog
        </NavLink>
      </Flex>
      <Box sx={{ mx: 2 }}>
        <ThemeSwitch />
      </Box>
    </Flex>
  </Container>
);

export default Navbar;

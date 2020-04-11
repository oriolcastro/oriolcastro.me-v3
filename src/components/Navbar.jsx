import { Link } from 'gatsby';

/** @jsx jsx */
import { Box, Container, Flex, jsx, NavLink } from 'theme-ui';

const Navbar = () => (
  <Container sx={{ mb: 4 }}>
    <Flex as="nav" sx={{ padding: 3, alignItems: 'baseline', overflowX: 'auto' }}>
      <Box sx={{ flex: 1 }}>
        <NavLink as={Link} variant="logo" to="/">
          Oriol Castro
        </NavLink>
      </Box>
      <Box>
        <NavLink as={Link} to="/portfolio">
          Projects
        </NavLink>
        <NavLink as={Link} to="/about">
          About
        </NavLink>
        <NavLink as={Link} to="/blog">
          Blog
        </NavLink>
      </Box>
    </Flex>
  </Container>
);

export default Navbar;

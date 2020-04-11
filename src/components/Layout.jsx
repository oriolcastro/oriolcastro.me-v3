/** @jsx jsx */
import PropTypes from 'prop-types';
import { Container, Flex, jsx } from 'theme-ui';

import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';

const TemplateWrapper = ({ children }) => (
  <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
    <SEO />
    <Navbar />
    <Container sx={{ px: 3, flex: '1 1 auto' }}>{children}</Container>
    <Footer />
  </Flex>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

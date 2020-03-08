import React from 'react';
import { IconContext } from 'react-icons';
import { FaCode, FaHeart } from 'react-icons/fa';

import { Container } from 'semantic-ui-react';

const Footer = () => (
  <Container
    text
    style={{
      marginTop: '24px',
      marginBottom: '24px',
      borderTop: 'solid 1px gray ',
    }}
  >
    Made with{' '}
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <FaHeart color="red" />
    </IconContext.Provider>{' '}
    in Vilanova.
    <br />
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <FaCode color="#4183c4" />
    </IconContext.Provider>{' '}
    using{' '}
    <a href="https://www.gatsbyjs.org/" target="_blank" rel="nofollow noopener noreferrer">
      Gatsby
    </a>{' '}
    and{' '}
    <a href="https://reactjs.org/" target="_blank" rel="nofollow noopener noreferrer">
      React
    </a>
    , styled with{' '}
    <a href="https://semantic-ui.com/" target="_blank" rel="nofollow noopener noreferrer">
      {' '}
      Semantic-UI
    </a>{' '}
    and delivered by{' '}
    <a href="https://www.netlify.com/" target="_blank" rel="nofollow noopener noreferrer">
      Netlify
    </a>
    .
  </Container>
);

export default Footer;

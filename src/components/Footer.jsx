/** @jsx jsx */
import { FaCode, FaHeart } from 'react-icons/fa';

import { Box, Container, jsx, Styled } from 'theme-ui';

const Footer = () => (
  <Container
    sx={{
      my: [3, 5],
      px: 3,
    }}
  >
    <Box
      sx={{
        borderTop: 'solid 1px',
        borderColor: 'accent',
        fontSize: 1,
        py: 2,
        width: 'auto',
      }}
    >
      {'Made with '}
      <span css={{ verticalAlign: 'middle' }}>
        <FaHeart sx={{ color: 'red' }} />
      </span>
      {' in Vilanova i la Geltrú.'}
      <br />
      <span css={{ verticalAlign: 'middle' }}>
        <FaCode sx={{ color: 'accent' }} />
      </span>
      {' using '}
      <Styled.a href="https://www.gatsbyjs.org/" target="_blank" rel="nofollow noopener noreferrer">
        Gatsby
      </Styled.a>
      {' and '}
      <Styled.a href="https://reactjs.org/" target="_blank" rel="nofollow noopener noreferrer">
        React
      </Styled.a>
      {', styled with '}
      <Styled.a href="https://theme-ui.com/" target="_blank" rel="nofollow noopener noreferrer">
        Theme UI
      </Styled.a>
      {' and delivered by '}
      <Styled.a href="https://www.netlify.com/" target="_blank" rel="nofollow noopener noreferrer">
        Netlify.
      </Styled.a>
    </Box>
  </Container>
);

export default Footer;

import merge from 'lodash/merge';

import colors from './colors';
import prism from './prism';
import styles from './styles';
import typography from './typography';

export default merge(typography, {
  useColorSchemeMediaQuery: true,
  colors,
  fonts: {
    heading: `Open Sans, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  sizes: {
    container: 980,
  },
  radii: [0, 4, 8, 16, 32, 9999],
  shadows: {
    hard: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    base: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
    x2: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },
  text: {
    blogDescription: {
      my: 4,
      px: 2,
      borderLeft: '1px solid',
      borderColor: 'accent',
      textAlign: 'justify',
      fontStyle: 'oblique',
    },
  },
  links: {
    logo: {
      fontSize: ['1.2rem', '1.6rem'],
      fontWeight: 300,
      letterSpacing: 1.2,
      fontFamily: 'Open Sans,sans-serif',
    },
    nav: {
      marginX: 2,
      display: 'block',
      fontSize: ['0.85rem', 2],
    },
    '&:hover': {
      color: 'secondary',
    },
  },
  cards: {
    post: {
      transition: 'transform .5s',
      borderRadius: '1rem',
      backgroundColor: 'cardBackground',
      boxShadow: 'base',
      '&:hover': {
        boxShadow: 'x2',
        transform: 'scale3d(1.02, 1.02, 1)',
      },
    },
    project: {
      borderRadius: '1rem',
      backgroundColor: 'cardBackground',
      boxShadow: 'hard',
      px: [3, 4],
      py: 4,
    },
    status: {
      borderRadius: 2,
      backgroundColor: 'cardBackground',
      boxShadow: 'hard',
      p: 3,
    },
  },
  images: {
    cardMedia: {
      borderRadius: '0 12px 12px 0',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      backgroundColor: 'primary',
      borderRadius: 2,
      border: '1px solid transparent',
      cursor: 'pointer',
      '&:hover': {
        // color: 'primary',
        // backgroundColor: 'background',
        // border: '1px solid',
        // borderColor: 'primary',
        opacity: 0.7,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: 'primary',
      cursor: 'pointer',
      '&:focus': {
        color: 'text',
        border: 'none',
        outline: 'none',
      },
    },
    secondary: {
      color: 'cardBackground',
      backgroundColor: 'text',
      borderRadius: 2,
      border: '1px solid transparent',
      cursor: 'pointer',
      '&:hover': {
        // color: 'text',
        // backgroundColor: 'cardBackground',
        // border: '1px solid',
        // borderColor: 'text',
        opacity: 0.7,
      },
    },
    icon: {
      borderRadius: '50%',
      border: '1px solid',
      marginRight: 2,
      color: 'primary',
      fontSize: '1rem',
      cursor: 'pointer',
      '&:hover': {
        color: 'background',
        backgroundColor: 'primary',
      },
    },
    outline: {
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 2,
      color: 'primary',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        color: 'cardBackground',
        backgroundColor: 'primary',
      },
    },
  },
  badges: {
    primary: {
      fontWeight: 400,
      borderRadius: 1,
      p: 1,
      mx: 1,
    },
    light: {
      color: 'lightText',
      bg: 'muted',
      fontWeight: 400,
      borderRadius: 1,
      p: 1,
      m: 1,
    },
  },
  styles,
  prism,
});

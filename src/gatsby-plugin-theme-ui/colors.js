/* eslint-disable no-unused-vars */
const blue70 = '#001D77';
const blue50 = '#0F52BA';
const blue40 = '#4970DD';
const blue30 = '#7290FF';
const orange = '#FF6B35';
const red = '#ED5467';
const grey90 = '#232129';
const black60 = '#1B1F23';
const black80 = '#191716';
const white = '#fff';
const lightWhite = 'rgba(255, 255, 255, 0.86)';
const opaqueLightYellow = 'rgba(255, 229, 100, 0.2)';

const grey = '#A9AABC';
const lightGray = '#E1E8F1';

const purple60 = '#663399';
const purple30 = '#D9BAE8';
const opaqueLightWhite = 'hsla(0, 0%, 100%, 0.2)';

export default {
  text: black60,
  background: white,
  primary: blue50,
  secondary: blue30,
  muted: lightGray,
  highlight: opaqueLightYellow,
  accent: orange,
  red,
  purple: purple60,
  prism: {
    background: '#011627',
    comment: '#809393',
    string: '#addb67',
    var: '#d6deeb',
    number: '#f78c6c',
    constant: '#82aaff',
    punctuation: '#c792ea',
    className: '#ffc98b',
    tag: '#ffa7c4',
    boolean: '#ff5874',
    property: '#80cbc4',
    namespace: '#b2ccd6',
    highlight: 'hsla(207, 95%, 15%, 1)',
  },
  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
    },
  },
};

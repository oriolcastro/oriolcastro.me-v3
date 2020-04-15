import { lighten } from 'polished';

const sapphire = '#0F52BA';
const fadedBlue = '#7290FF';
const burntOrange = '#FF6B35';
const orangeDARK = `${lighten(0.1, burntOrange)}`;
const mandy = '#ED5467';
const darkJungle = '#1B1F23';
const onyx = '#121212';
const bunker = '#2C2C2C';
const mineShaft = '#323232';
const mystic = '#E1E8F1';
const white = '#fff';
const lightWhite = 'rgba(255, 255, 255, 0.86)';
const lighterWhite = 'rgba(255, 255, 255, 0.6)';
const opaqueLightWhite = 'hsla(0, 0%, 100%, 0.2)';
const opaqueLightYellow = 'rgba(255, 229, 100, 0.2)';

export default {
  text: darkJungle,
  lightText: mineShaft,
  background: white,
  primary: sapphire,
  secondary: fadedBlue,
  muted: mystic,
  highlight: opaqueLightYellow,
  accent: burntOrange,
  red: mandy,
  cardBackground: white,
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
      lightText: lighterWhite,
      background: onyx,
      primary: fadedBlue,
      secondary: fadedBlue,
      accent: orangeDARK,
      muted: opaqueLightWhite,
      highlight: opaqueLightYellow,
      heading: white,
      cardBackground: bunker,
    },
  },
};

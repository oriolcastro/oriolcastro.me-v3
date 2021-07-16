/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: 'class', // or 'media' or 'class',
  mode: 'jit',
  theme: {
    colors: {
      text: '#1B1F23',
      lightText: '#323232',
      background: '#fff',
      primary: '#0F52BA',
      secondary: '#7290FF',
      muted: '#E1E8F1',
      highlight: 'rgba(255, 229, 100, 0.2)',
      accent: '#FF6B35',
      red: '#ED5467',
      cardBackground: '#fff',
    },
    nightwind: {
      typography: true,
      colors: {
        text: '#fff',
        background: '#121212',
      },
    },
    extend: {
      gridTemplateColumns: {
        TwoThree: '2fr 3fr',
        OneFour: '1fr 4fr',
        OneSix: '1fr 6fr',
        timelineItem: 'auto 1fr',
      },
      fontFamily: {
        heading: ['Open Sans', 'sans-serif'],
        body: ['Merriweather', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            a: {
              color: theme('colors.primary'),
              textDecoration: 'none',
            },
            p: {
              textAlign: 'justify',
            },
            'h2,h3,h4, strong': {
              color: theme('colors.text'),
            },
            // ...
          },
        },
      }),
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('nightwind'),
  ],
};

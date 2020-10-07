/** @jsx jsx */
import { useCallback, useEffect } from 'react';

import { jsx, useColorMode } from 'theme-ui';

const inputStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  margin: 0,
  width: '48px',
  height: '24px',
  zIndex: 5,
  opacity: 0,
  cursor: 'pointer',
  '&:checked + span': {
    background: '#4a5b90',
    '&:after': {
      transform: 'translate3d(24px, 0, 0)',
    },
  },
};

const containerStyle = {
  position: 'relative',
  '&:after': {
    content: '"☀️"',
    fontSize: '14px',
    position: 'absolute',
    top: '0px',
    left: '28px',
  },
  '&:before': {
    content: '"🌙"',
    fontSize: '14px',
    position: 'absolute',
    top: '0px',
    left: '4px',
    zIndex: 1,
  },
};

const spanStyle = {
  position: 'relative',
  display: 'block',
  height: '24px',
  width: '48px',
  borderRadius: '24px',
  transition: '0.25s ease-in-out',
  background: '#3a9df8',
  boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.15)',
  '&:after': {
    content: '""',
    position: 'absolute',
    borderRadius: '100%',
    top: 0,
    left: 0,
    zIndex: 2,
    background: '#fff',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    transition: '0.25s ease-in-out',
    width: '24px',
    height: '24px',
  },
};

const ThemeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleMode = useCallback(() => {
    if (colorMode === 'light') {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  }, [setColorMode, colorMode]);

  useEffect(() => {
    const switchMode = (e) => {
      const isDarkMode = e.matches;
      if (isDarkMode) {
        setColorMode('dark');
      } else {
        setColorMode('light');
      }
    };
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addListener(switchMode);

    // return () => darkModeMediaQuery.removeEventListener(switchMode);
  }, [setColorMode]);

  return (
    <div sx={containerStyle}>
      <input
        type="checkbox"
        onChange={toggleMode}
        checked={colorMode !== 'light'}
        aria-label="Theme switcher"
        sx={inputStyle}
      />
      <span sx={spanStyle} />
    </div>
  );
};

export default ThemeSwitch;

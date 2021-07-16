import React from 'react';

import nightwind from 'nightwind/helper';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitch = () => {
  // const [darkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const isDarkModeEnabled = document.documentElement.classList.contains('dark');
  const handleChange = () => {
    nightwind.toggle();
    // setDarkMode(!darkMode);
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={isDarkModeEnabled}
        aria-label="Theme switcher"
        className={styles.input}
      />
      <span className={styles.span} />
    </div>
  );
};

export default ThemeSwitch;

const React = require('react');
const nightwind = require('nightwind/helper');

console.log('🚀 ~ file: gatsby-ssr.js ~ line 3 ~ nightwind', nightwind.init());

exports.onRenderBody = function ({ setPreBodyComponents }) {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'gatsby-plugin-dark-mode',
      dangerouslySetInnerHTML: {
        __html: `
        void function() {
            function getInitialColorMode() {
                    const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
                    const hasPersistedPreference = typeof persistedColorPreference === 'string';
                    if (hasPersistedPreference) {
                      return persistedColorPreference;
                    }
                    const mql = window.matchMedia('(prefers-color-scheme: dark)');
                    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                    if (hasMediaQueryPreference) {
                      return mql.matches ? 'dark' : 'light';
                    }
                    return 'light';
            }
            getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
          })()
        `,
      },
    }),
  ]);
};

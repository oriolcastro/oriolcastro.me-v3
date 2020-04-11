import React from 'react';

import PropTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
  <span
    style={{ marginRight: '4px' }}
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

export default Emoji;

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

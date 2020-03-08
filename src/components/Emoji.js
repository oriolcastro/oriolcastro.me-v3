import React from 'react';

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

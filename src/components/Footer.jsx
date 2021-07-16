import React from 'react';
import { FaCode, FaHeart } from 'react-icons/fa';

const Footer = () => (
  <div className="container my-4 lg:my-8">
    <div className="border-t-2 border-solid border-accent text-base py-2 w-auto">
      <p>
        {'Made with '}
        <span>
          <FaHeart className="text-red inline" />
        </span>
        {' in Vilanova i la Geltrú. '}
        <span>
          <FaCode className="text-accent inline" />
        </span>
        {' using '}
        <a
          className="no-underline text-primary"
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Gatsby
        </a>
        {' and '}
        <a
          className="no-underline text-primary"
          href="https://reactjs.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          React
        </a>
        {', styled with '}
        <a
          className="no-underline text-primary"
          href="https://theme-ui.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Theme UI
        </a>
        {' and delivered by '}
        <a
          className="no-underline text-primary"
          href="https://www.netlify.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Netlify.
        </a>
      </p>
    </div>
  </div>
);

export default Footer;

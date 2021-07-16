import React from 'react';

import { Link } from 'gatsby';

import ThemeSwitch from './ThemeSwitch';

const Navbar = () => (
  <div className="container mb-5">
    <nav className="flex p-4 items-center">
      <div className="flex-1">
        <Link
          className="text-xl font-light tracking-wide font-heading font lg:text-3xl"
          variant="logo"
          to="/"
        >
          Oriol
        </Link>
      </div>
      <div className="flex">
        <Link className="mx-2 block text-sm hover:text-secondary lg:text-lg" to="/portfolio">
          Projects
        </Link>
        <Link className="mx-2 block text-sm hover:text-secondary lg:text-lg" to="/about">
          About
        </Link>
        <Link className="mx-2 block text-sm hover:text-secondary lg:text-lg" to="/blog">
          Blog
        </Link>
      </div>
      <div className="mx-2">
        <ThemeSwitch />
      </div>
    </nav>
  </div>
);

export default Navbar;

import React from 'react';

import PropTypes from 'prop-types';

import Footer from './Footer';
import Navbar from './Navbar';

const TemplateWrapper = ({ children }) => (
  <>
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="container flex-auto">{children}</div>
      <Footer />
    </div>
  </>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

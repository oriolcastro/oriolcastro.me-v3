import React from 'react';
import Helmet from 'react-helmet';

import { graphql, StaticQuery } from 'gatsby';

import { Container } from 'semantic-ui-react';
import { withPlugin } from 'tinacms';

import favicon from '../img/favicon.ico';
import CreatePostPlugin from '../plugins/postCreator';

import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';

import 'semantic-ui-css/semantic.min.css';
import '../styles/global.css';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // eslint-disable-next-line no-unused-vars
    render={data => (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="ca" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <SEO />
        <Navbar />
        <Container text style={{ flex: '1' }}>
          {children}
        </Container>
        <Footer />
      </div>
    )}
  />
);

export default withPlugin(TemplateWrapper, CreatePostPlugin);

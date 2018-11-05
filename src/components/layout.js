import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import "../styles/global.css";
import favicon from "../img/favicon.ico";

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
    render={data => (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="ca" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <SEO />
        <Navbar />
        <Container text style={{ flex: "1" }}>
          {children}
        </Container>
        <Footer />
      </div>
    )}
  />
);

export default TemplateWrapper;

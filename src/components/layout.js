import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <Helmet title={data.site.siteMetadata.title} />
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

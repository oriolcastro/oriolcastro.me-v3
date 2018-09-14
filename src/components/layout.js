import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navbar from "../components/Navbar";

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
      <>
        <Helmet title={data.site.siteMetadata.title} />
        <Navbar />
        <Container text>{children}</Container>
      </>
    )}
  />
);

export default TemplateWrapper;

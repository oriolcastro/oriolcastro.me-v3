import React, { Component } from "react";
import { Helmet } from "react-helmet";
import config from "../meta/siteConfig";

class SEO extends Component {
  render() {
    let title = config.siteTitle;
    let description = config.siteDescription;
    let pageUrl = config.siteUrl;

    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: config.siteUrl,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ];

    return (
      <Helmet>
        {/* General tags */}
        <title>{config.siteTitle}</title>
        <meta name="description" content={description} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    );
  }
}

export default SEO;

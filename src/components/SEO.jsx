import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../img/favicon.ico';
import config from '../meta/siteConfig';

const SEO = () => {
  const { siteTitle, siteTitleAlt, siteDescription, siteUrl, userTwitter } = config.siteTitle;

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: siteTitle,
      alternateName: siteTitleAlt || '',
    },
  ];

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="en" />
      <link rel="icon" href={favicon} />
      {/* General tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      {/* OpenGraph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={siteDescription} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={userTwitter || ''} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

export default SEO;

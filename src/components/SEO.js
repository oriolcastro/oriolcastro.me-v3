import React from 'react';
import { Helmet } from 'react-helmet';

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

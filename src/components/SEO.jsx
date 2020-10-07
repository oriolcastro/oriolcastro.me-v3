import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

import PropTypes from 'prop-types';

import favicon from '../img/favicon.ico';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        siteUrl
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description, image, pathname, article }) => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, defaultDescription, siteUrl, twitterUsername },
    },
  } = useStaticQuery(query);
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || '/'}`,
  };

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: seo.url,
      name: seo.title,
      alternateName: seo.title,
    },
  ];

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="en" />
      <link rel="icon" href={favicon} />
      {/* General tags */}
      <meta name="description" content={seo.description} />
      {image && <meta name="image" content={seo.image} />}
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      {/* OpenGraph tags */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {image && <meta property="og:image" content={seo.image} />}
      {/* Twitter Card tags */}
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {image && <meta name="twitter:card" content="summary_large_image" />}
      {image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: '',
  pathname: null,
  article: false,
};

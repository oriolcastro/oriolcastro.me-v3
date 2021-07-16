import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '@components/Layout';
import SEO from '@components/SEO';

const PageTemplate = ({ data: { mdx }, pageMeta, children, path }) => {
  return (
    <Layout>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        pathname={path}
        image={mdx.frontmatter.coverImg.childImageSharp.original.src}
      />
      {mdx.frontmatter.coverImg && (
        <GatsbyImage image={mdx.frontmatter.coverImg.childImageSharp.gatsbyImageData} />
      )}
      <div className="py-6">
        <h1 className="mb-8 font-bold text-4xl">{pageMeta.title}</h1>
        <div className="prose lg:prose-lg max-w-none">{children}</div>
      </div>
    </Layout>
  );
};

export default PageTemplate;

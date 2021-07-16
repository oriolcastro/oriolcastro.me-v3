import React from 'react';
import { Helmet } from 'react-helmet';

import { graphql, Link } from 'gatsby';

import { kebabCase } from 'lodash';

import Layout from '@components/Layout';

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet>
      <title>{`Tags | ${title}`}</title>
    </Helmet>
    <h1 className="mb-6">Tags</h1>
    <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
            {`${tag.fieldValue} (${tag.totalCount})`}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

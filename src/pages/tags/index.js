/** @jsx jsx */
import { Helmet } from 'react-helmet';

import { graphql, Link } from 'gatsby';

import { kebabCase } from 'lodash';
import { Heading, jsx, Styled } from 'theme-ui';

import Layout from '@components/Layout';

const Ul = Styled.ul;
const Li = Styled.li;

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
    <Heading as="h1" sx={{ mb: 4 }}>
      Tags
    </Heading>
    <Ul>
      {group.map((tag) => (
        <Li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
            {`${tag.fieldValue} (${tag.totalCount})`}
          </Link>
        </Li>
      ))}
    </Ul>
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

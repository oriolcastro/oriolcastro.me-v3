/** @jsx jsx */
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Link } from 'gatsby';

import { Button, Flex, jsx } from 'theme-ui';

const PostLinks = ({ prev, next }) => (
  <Flex
    sx={{
      mb: 5,
      justifyContent: 'space-between',
    }}
  >
    {prev && (
      <Button as={Link} to={prev.fields.slug}>
        <FaArrowLeft sx={{ size: '1.15em', mr: 2, verticalAlign: 'text-top' }} />
        Prev post
      </Button>
    )}
    {next && (
      <Link to={next.fields.slug}>
        <Button primary size="small">
          Next post
          <FaArrowRight sx={{ size: '1.15em', ml: 2, verticalAlign: 'text-top' }} />
        </Button>
      </Link>
    )}
  </Flex>
);

export default PostLinks;

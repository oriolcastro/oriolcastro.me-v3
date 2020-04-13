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
      <Button
        variant="text"
        as={Link}
        to={prev.fields.slug}
        sx={{ '&:hover': { transition: 'transform .5s', transform: 'translateX(-12px)' } }}
      >
        <FaArrowLeft
          sx={{
            size: '1.15em',
            mr: 2,
            verticalAlign: 'text-top',
          }}
        />
        Prev post
      </Button>
    )}
    {next && (
      <Button
        variant="text"
        as={Link}
        to={next.fields.slug}
        sx={{ '&:hover': { transition: 'transform .5s', transform: 'translateX(12px)' } }}
      >
        Next post
        <FaArrowRight sx={{ size: '1.15em', ml: 2, verticalAlign: 'text-top' }} />
      </Button>
    )}
  </Flex>
);

export default PostLinks;

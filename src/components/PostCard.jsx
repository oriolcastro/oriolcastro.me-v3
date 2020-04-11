/** @jsx jsx */

import { Link } from 'gatsby';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import { Badge, Card, Flex, Heading, jsx, Text } from 'theme-ui';

const PostCard = ({ post }) => {
  const {
    frontmatter: { coverImg, date, title, description, tags },
    fields: { slug },
    timeToRead,
    id,
  } = post;
  return (
    <Card
      as={Link}
      to={slug}
      key={id}
      variant="post"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      {coverImg && (
        <Img
          fluid={coverImg.childImageSharp.fluid}
          title=""
          alt=""
          style={{ borderRadius: '1em 1em 0 0' }}
        />
      )}
      <Flex sx={{ px: [3, 4], py: 4, flexDirection: 'column', flex: 1 }}>
        <div sx={{ flex: 1 }}>
          <Text sx={{ width: '100%' }}>{`${date} - ${timeToRead} min`}</Text>
          <Heading as="h2" sx={{ mb: [2, 3], width: '100%', color: 'primary' }}>
            {title}
          </Heading>
        </div>
        <Text
          as="p"
          css={{
            display: '-webkit-box',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            marginBottom: '1em',
          }}
        >
          {description}
        </Text>
        <Flex sx={{ my: 2 }}>
          <div style={{ flex: 1 }}>
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </div>
        </Flex>
      </Flex>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      coverImg: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
    timeToRead: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;

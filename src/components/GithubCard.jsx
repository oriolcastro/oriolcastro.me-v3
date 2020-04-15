/** @jsx jsx */
import { useMemo } from 'react';
import { FaCode, FaExternalLinkSquareAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { Badge, Button, Card, Flex, Heading, jsx, Text } from 'theme-ui';

const GithubCard = ({ repo }) => {
  const { id, name, description, homepageUrl, url, repositoryTopics } = repo;
  const formatedName = useMemo(
    () => `${name.charAt(0).toUpperCase()}${name.replace('-', ' ').slice(1)}`,
    [name]
  );
  return (
    <Card variant="project" key={id} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Heading as="h3">{formatedName}</Heading>
      <Text sx={{ textAlign: 'justify', py: 3, flex: 1 }}>{description}</Text>
      <Flex sx={{ justifyContent: 'space-evenly', mb: 4 }}>
        <Button
          as="a"
          href={homepageUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          variant="outline"
        >
          <FaExternalLinkSquareAlt sx={{ verticalAlign: 'text-top', fontSize: '1.25rem', mr: 2 }} />
          Project
        </Button>
        <Button
          as="a"
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          variant="secondary"
        >
          <FaCode sx={{ verticalAlign: 'text-top', fontSize: '1.25rem', mr: 2 }} />
          Code
        </Button>
      </Flex>
      <Flex
        sx={{ borderTop: '1px solid', borderColor: 'muted', pt: 3, flexWrap: ['wrap', 'nowrap'] }}
      >
        {repositoryTopics.edges.map(({ node }) => (
          <Badge
            variant="light"
            key={node.id}
            sx={{ textOverflow: 'ellipsis', overflowX: 'hidden' }}
          >
            {node.topic.name}
          </Badge>
        ))}
      </Flex>
    </Card>
  );
};

GithubCard.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    homepageUrl: PropTypes.string,
    url: PropTypes.string,
    repositoryTopics: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            topic: PropTypes.shape({
              name: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export default GithubCard;

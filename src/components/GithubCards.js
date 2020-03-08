import React from 'react';
import { IconContext } from 'react-icons';
import { FaCode, FaExternalLinkSquareAlt } from 'react-icons/fa';

import { Button, Card, Container, Label } from 'semantic-ui-react';

const GithubCards = ({ repos }) => (
  <Container>
    <Card.Group itemsPerRow="2" stackable>
      {repos.map(({ node: repo }) => (
        <Card key={repo.id}>
          <Card.Content>
            <Card.Header style={{ textTransform: 'capitalize' }}>{repo.name}</Card.Header>
            <Card.Description>
              <p style={{ marginBottom: '16px', height: '6rem' }}>{repo.description}</p>
              <Button
                basic
                color="blue"
                href={repo.homepageUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                style={{ marginRight: '8px' }}
              >
                <IconContext.Provider
                  value={{
                    style: {
                      verticalAlign: 'text-top',
                      marginRight: '8px',
                    },
                    size: '1.15em',
                  }}
                >
                  <FaExternalLinkSquareAlt />
                </IconContext.Provider>
                Projecte
              </Button>
              <Button secondary href={repo.url} target="_blank" rel="nofollow noopener noreferrer">
                <IconContext.Provider
                  value={{
                    style: {
                      verticalAlign: 'text-top',
                      marginRight: '8px',
                    },
                    size: '1.15em',
                  }}
                >
                  <FaCode />
                </IconContext.Provider>
                Codi
              </Button>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {repo.repositoryTopics.edges.map(({ node: t }) => (
              <Label key={t.id} style={{ marginBottom: '8px' }}>
                {t.topic.name}
              </Label>
            ))}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </Container>
);

export default GithubCards;

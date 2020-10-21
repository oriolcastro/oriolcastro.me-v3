/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import name from 'emoji-name-map';
import { Card, Grid, jsx, Styled, Text } from 'theme-ui';

import Emoji from './Emoji';

const Status = () => {
  const {
    github: {
      user: {
        company,
        status: { emoji, isHireable, message },
      },
    },
  } = useStaticQuery(graphql`
    {
      github {
        user(login: "oriolcastro") {
          company
          isHireable
          status {
            emoji
            message
          }
        }
      }
    }
  `);

  const unicodeEmoji = name.get(emoji);
  const statusStyle = isHireable ? { border: '1px solid', borderColor: 'accent' } : {};
  return (
    <Grid gap={5} columns={[1, '1fr 1fr']}>
      <Card variant="status" sx={statusStyle}>
        <Text sx={{ color: 'lightText', fontSize: 1, mb: 2 }}>Job status</Text>
        {isHireable ? (
          <Text sx={{ fontWeight: 700 }}>
            <Emoji symbol="🔍" />
            Looking for my new challenge!
          </Text>
        ) : (
          <Text>
            Working as a front-end developer at
            <Styled.a as={OutboundLink} href="https://xceed.me">
              {' '}
              {company}
            </Styled.a>
          </Text>
        )}
      </Card>
      <Card variant="status">
        <Text sx={{ color: 'lightText', fontSize: 1, mb: 2 }}>Interests status</Text>
        <Text>
          <Emoji symbol={unicodeEmoji} />
          {message}
        </Text>
      </Card>
    </Grid>
  );
};

export default Status;

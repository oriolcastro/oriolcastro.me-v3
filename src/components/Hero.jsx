/** @jsx jsx */
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Box, Flex, Grid, Heading, IconButton, jsx, Text } from 'theme-ui';

import Emoji from './Emoji';
import ProfileImg from './ProfileImg';

const LINKS = [
  {
    name: 'twitter',
    href: 'https://twitter.com/oriolcastro_',
    icon: <FaTwitter />,
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/oriolcastro_/',
    icon: <FaInstagram />,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/oriolcaar/',

    icon: <FaLinkedin />,
  },
  {
    name: 'github',
    href: 'https://github.com/oriolcastro',
    icon: <FaGithub />,
  },
  {
    name: 'email',
    href: 'mailto:uri@oriolcastro.me',
    icon: <FaEnvelope />,
  },
];

const Hero = () => {
  const { profileImage } = useStaticQuery(graphql`
    query HomeHeroQuery {
      profileImage: imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
        fluid(maxWidth: 650) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  `);
  return (
    <Grid gap={[2, 4]} columns={[1, '2fr 3fr']} sx={{ mb: 4 }}>
      <Flex sx={{ justifyContent: 'center', flexDirection: 'column' }}>
        <ProfileImg profileImage={profileImage} />
      </Flex>
      <Flex sx={{ py: [3, 4], px: [0, 4], justifyContent: 'center', flexDirection: 'column' }}>
        <Heading as="h1" sx={{ fontSize: '3rem', mb: [3, 4] }}>
          <Emoji symbol="🙋🏼‍♂️" label="Hey!" />
          {" Hi! I'm Oriol"}
        </Heading>
        <Box sx={{ mb: 3, fontSize: ['1.3rem', '1.5rem'], whiteSpace: 'pre-wrap' }}>
          <Text>A self-taught front-end developer and a technology enthusiast from Barcelona.</Text>
          <Text>
            Here I write about personal projects, my programming career, and any new cool tech I
            find.
          </Text>
        </Box>
        <Flex sx={{ justifyContent: ['center', 'start'] }}>
          {LINKS.map((link) => (
            <OutboundLink
              key={link.name}
              href={link.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <IconButton>{link.icon}</IconButton>
            </OutboundLink>
          ))}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Hero;

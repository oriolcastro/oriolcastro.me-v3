/** @jsx jsx */
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';

import { Box, Flex, Grid, Heading, IconButton, jsx, Text } from 'theme-ui';

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

const Profile = () => {
  const { profileImage } = useStaticQuery(graphql`
    query ProfileQuery {
      profileImage: imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
        fluid(maxWidth: 650) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  `);

  return (
    <Grid gap={[2, 4]} columns={['1fr 4fr', '1fr 6fr']} sx={{ mb: 4 }}>
      <Box sx={{ py: 3 }}>
        <ProfileImg profileImage={profileImage} />
      </Box>
      <Flex sx={{ py: 3, px: [0, 4], flexDirection: 'column' }}>
        <Heading as="h4" sx={{ display: ['none', 'block'] }}>
          Oriol Castro
        </Heading>
        <Box sx={{ mb: 2 }}>
          <Text sx={{ fontSize: [0, 1] }}>
            A self-taught front-end developer and a technology enthusiast from Barcelona.
          </Text>
        </Box>
        <Box sx={{ justifyContent: ['', 'start'], display: ['none', 'flex'] }}>
          {LINKS.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="nofollow noopener noreferrer">
              <IconButton>{link.icon}</IconButton>
            </a>
          ))}
        </Box>
      </Flex>
    </Grid>
  );
};

export default Profile;

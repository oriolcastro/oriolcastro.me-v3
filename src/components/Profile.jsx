import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';

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
    <div className="grid gap-2 grid-cols-OneFour mb-6 lg:gap-6 lg:grid-cols-OneSix">
      <div className="py-4">
        <ProfileImg profileImage={profileImage} />
      </div>
      <div className="flex py-4 px-0 flex-col lg:px-6">
        <h4 className="hidden font-bold text-lg lg:block">Oriol Castro</h4>
        <div className="mb-2">
          <p className="text-sm lg:text-base">
            A self-taught front-end developer and a technology enthusiast from Barcelona.
          </p>
        </div>
        <div className="hidden lg:flex lg:justify-start ">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mr-2 inline-flex items-center justify-center p-1 w-8 h-8 bg-transparent rounded-full border border-solid text-primary text-base cursor-pointer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

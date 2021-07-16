import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

const Hero = () => (
  <div className="grid gap-2 grid-cols-1 mb-8 lg:gap-6 lg:grid-cols-TwoThree ">
    <div className="flex justify-center flex-col">
      <ProfileImg />
    </div>
    <div className="flex justify-center flex-col py-4 px-0 lg:py-6 lg:px-6">
      <h1 className="text-5xl mb-4 font-bold lg:mb-6">
        <Emoji symbol="🙋🏼‍♂️" label="Hey!" />
        {" Hi! I'm Oriol"}
      </h1>
      <div className=" mb-4 whitespace-pre-wrap ">
        <p className="text-xl mb-2 lg:text-2xl">
          A self-taught front-end developer and a technology enthusiast from Barcelona.
        </p>
        <p className="text-xl lg:text-2xl">
          Here I write about personal projects, my programming career, and any new cool tech I find.
        </p>
      </div>
      <div className="flex justify-center lg:justify-start">
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={`Navigate to my ${link.name}`}
          >
            <button
              type="button"
              className="w-8 h-8 inline-flex justify-center items-center rounded-full border-solid border text-primary mr-2 text-base cursor-pointer hover:text-background hover:bg-primary"
              aria-label={`Icon for ${link.name}`}
            >
              {link.icon}
            </button>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;

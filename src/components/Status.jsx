import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import name from 'emoji-name-map';

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
  return (
    <div className="grid gap-8 grid-cols-1 mb-8 lg:grid-cols-2">
      <div
        className={`bg-cardBackground shadow p-4 rounded-lg ${
          isHireable ? 'border-solid border border-accent' : ''
        }`}
      >
        <p className="text-lightText text-base mb-2">Job status</p>
        {isHireable ? (
          <p className="font-bold">
            <Emoji symbol="🔍" />
            Looking for my new challenge!
          </p>
        ) : (
          <p>
            Working as a front-end developer at
            <a
              className="no-underline text-primary"
              href="https://immfly.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {' '}
              {company}
            </a>
          </p>
        )}
      </div>
      <div className="bg-cardBackground shadow p-4 rounded-lg">
        <p className="text-lightText text-base mb-2">Interests status</p>
        <p>
          <Emoji symbol={unicodeEmoji} />
          {message}
        </p>
      </div>
    </div>
  );
};

export default Status;

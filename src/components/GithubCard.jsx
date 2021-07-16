import React, { useMemo } from 'react';
import { FaCode, FaExternalLinkSquareAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';

const GithubCard = ({ repo }) => {
  const { id, name, description, homepageUrl, url, repositoryTopics } = repo;
  const formatedName = useMemo(
    () => `${name.charAt(0).toUpperCase()}${name.replace('-', ' ').slice(1)}`,
    [name]
  );

  return (
    <div className="rounded-2xl bg-cardBackground shadow px-4 py-6 lg:px-6 flex flex-col" key={id}>
      <h3 className="text-xl font-bold">{formatedName}</h3>
      <p className="text-justify py-4 flex-1">{description}</p>
      <div className="flex justify-evenly mb-6">
        <a
          className="flex justify-center items-center px-4 py-2 border-solid border border-primary rounded-lg text-primary bg-transparent cursor-pointer hover:text-cardBackground hover:bg-primary"
          href={homepageUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaExternalLinkSquareAlt className="text-xl mr-2" />
          Project
        </a>

        <a
          className="flex justify-center items-center px-4 py-2  text-cardBackground bg-text rounded-lg border-solid border border-transparent cursor-pointer hover:opacity-70"
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaCode className="text-xl mr-2" />
          Code
        </a>
      </div>
      <div className="flex border-t border-solid border-muted pt-4 flex-wrap lg:flex-nowrap">
        {repositoryTopics.edges.map(({ node }) => (
          <div
            className="text-sm whitespace-nowrap text-lightText bg-muted font-normal rounded p-1 m-1 overflow-ellipsis overflow-x-hidden"
            key={node.id}
          >
            {node.topic.name}
          </div>
        ))}
      </div>
    </div>
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

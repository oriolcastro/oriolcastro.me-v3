import React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  const {
    frontmatter: { coverImg, date, title, description, tags },
    fields: { slug },
    timeToRead,
    id,
  } = post;
  return (
    <Link to={slug} key={id}>
      <div className="rounded-2xl bg-cardBackground flex flex-col shadow-md transform transition-transform duration-500 hover:shadow-lg hover:scale-[1.02]">
        {coverImg && (
          <GatsbyImage
            image={coverImg.childImageSharp.gatsbyImageData}
            title=""
            alt=""
            style={{ borderRadius: '1em 1em 0 0' }}
          />
        )}
        <div className="flex flex-col flex-1 px-4 py-6 lg:px-6">
          <div className="flex-1">
            <p className="w-full text-lg">{`${date} - ${timeToRead} min`}</p>
            <h2 className="w-full text-2xl font-bold text-primary mb-2 lg:mb-4">{title}</h2>
          </div>
          <p className="line-clamp-3 mb-4 text-lg">{description}</p>
          <div className="flex my-2">
            <div className="flex-1">
              {tags.slice(0, 4).map((tag) => (
                <div
                  className="inline-block text-sm whitespace-nowrap text-lightText bg-muted font-normal rounded p-1 m-1"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
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
    timeToRead: PropTypes.number,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;

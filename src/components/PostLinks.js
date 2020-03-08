import React from 'react';
import { IconContext } from 'react-icons';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Link } from 'gatsby';

import { Button } from 'semantic-ui-react';

const PostLinks = ({ previous, next }) => {
  return (
    <div
      style={{
        marginBottom: '48px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {previous && (
        <Link to={previous.fields.slug}>
          <Button primary size="small">
            <IconContext.Provider
              value={{
                style: { verticalAlign: 'text-top', marginRight: '8px' },
                size: '1.15em',
              }}
            >
              <FaArrowLeft />
            </IconContext.Provider>
            Publicació anterior
          </Button>
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug}>
          <Button primary size="small">
            Pròxima publicació
            <IconContext.Provider
              value={{
                style: { verticalAlign: 'text-top', marginLeft: '8px' },
                size: '1.15em',
              }}
            >
              <FaArrowRight />
            </IconContext.Provider>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PostLinks;

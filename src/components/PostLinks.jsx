import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Link } from 'gatsby';

const PostLinks = ({ prev, next }) => (
  <div className="flex mb-8 justify-between">
    {prev && (
      <Link
        className="flex items-center px-4 py-2 bg-transparent text-primary cursor-pointer focus:text-text focus:border-none focus:outline-none transform transition-transform hover:-translate-x-3 duration-500"
        to={prev.fields.slug}
      >
        <FaArrowLeft className="w-5 h-5 mr-2" />
        Prev post
      </Link>
    )}
    {next && (
      <Link
        className="flex items-center px-4 py-2 bg-transparent  bg-transparent text-primary cursor-pointer focus:text-text focus:border-none focus:outline-none transform transition-transform hover:translate-x-3 duration-500"
        to={next.fields.slug}
      >
        Next post
        <FaArrowRight className="w-5 h-5 ml-2" />
      </Link>
    )}
  </div>
);

export default PostLinks;

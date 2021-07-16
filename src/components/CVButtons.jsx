import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';

const CVButtons = () => {
  const data = useStaticQuery(graphql`
    {
      myCV: file(extension: { eq: "pdf" }, name: { in: "OriolCastroArnau_CV" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="py-4">
      <h4 className="mb-4 font-bold text-lg">Download my resume</h4>
      <div className="flex flex-wrap justify-start">
        <a
          className="flex justify-center items-center p-4 mr-0 mb-4 w-full !text-background bg-primary rounded-lg cursor-pointer hover:opacity-70 lg:mr-4 lg:w-auto"
          download
          href={data?.myCV?.publicURL}
        >
          <FaFilePdf className="w-5 mr-2 align-top" />
          Resume
        </a>
      </div>
    </div>
  );
};

export default CVButtons;

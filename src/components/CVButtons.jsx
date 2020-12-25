/** @jsx jsx */
import { FaFilePdf } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';

import { Button, Flex, Heading, jsx } from 'theme-ui';

const CVButtons = () => {
  const data = useStaticQuery(graphql`
    {
      myCV: file(extension: { eq: "pdf" }, name: { in: "OriolCastroArnau_CV" }) {
        publicURL
      }
    }
  `);

  return (
    <div sx={{ py: 3 }}>
      <Heading as="h4" sx={{ mb: 3 }}>
        Download my resume
      </Heading>
      <Flex sx={{ flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        <Button
          as="a"
          download
          href={data?.myCV?.publicURL}
          sx={{ width: ['100%', 'auto'], mr: [0, 3], mb: 3 }}
        >
          <FaFilePdf sx={{ size: '1.15em', mr: 2, verticalAlign: 'text-top' }} />
          Resume
        </Button>
      </Flex>
    </div>
  );
};

export default CVButtons;

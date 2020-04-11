/** @jsx jsx */
import { FaFilePdf } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { Button, Flex, Heading, jsx } from 'theme-ui';

const CVButtons = () => {
  const data = useStaticQuery(graphql`
    {
      cvInCat: file(extension: { eq: "pdf" }, name: { in: "OriolCastroArnau_CV[CAT]" }) {
        publicURL
      }
      cvInEng: file(extension: { eq: "pdf" }, name: { in: "OriolCastroArnau_CV[ENG]" }) {
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
          href={data?.cvInEng?.publicURL}
          sx={{ width: ['100%', 'auto'], mr: [0, 3], mb: 3 }}
          onClick={(e) => {
            e.preventDefault();
            trackCustomEvent({
              category: 'interaction',
              action: 'Click',
              label: 'ENG CV download',
            });
          }}
        >
          <FaFilePdf sx={{ size: '1.15em', mr: 2, verticalAlign: 'text-top' }} />
          Resume [ENG]
        </Button>
        <Button
          href={data?.cvInCat?.publicURL}
          sx={{ width: ['100%', 'auto'], mb: 3 }}
          onClick={(e) => {
            e.preventDefault();
            trackCustomEvent({
              category: 'interaction',
              action: 'Click',
              label: 'CAT CV download',
            });
          }}
        >
          <FaFilePdf sx={{ size: '1.15em', mr: 2, verticalAlign: 'text-top' }} />
          Resume [CAT]
        </Button>
      </Flex>
    </div>
  );
};

export default CVButtons;

import React from 'react';
import { IconContext } from 'react-icons';
import { FaFilePdf } from 'react-icons/fa';

import { graphql, useStaticQuery } from 'gatsby';

import { Button, Header } from 'semantic-ui-react';

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
    <div style={{ margin: 'calc(2rem - .14285714em) 0 1rem' }}>
      <Header as="h4">Descarrega el meu Curriculum Vitae</Header>
      <Button
        primary
        href={data?.cvInCat?.publicURL}
        download
        style={{ marginRight: '8px' }}
        /* onClick={() =>
        gtag("event", "cv button", {
          event_category: "interacció",
          event_label: "cv català"
        })
      } */
      >
        <IconContext.Provider
          value={{
            style: {
              verticalAlign: 'text-top',
              marginRight: '8px',
            },
            size: '1.15em',
          }}
        >
          <FaFilePdf />
        </IconContext.Provider>
        CV en Català
      </Button>
      <Button
        primary
        href={data?.cvInEng?.publicURL}
        download
        /*  onClick={() =>
        gtag("event", "cv button", {
          event_category: "interacció",
          event_label: "cv anglès"
        })
      } */
      >
        <IconContext.Provider
          value={{
            style: {
              verticalAlign: 'text-top',
              marginRight: '8px',
            },
            size: '1.15em',
          }}
        >
          <FaFilePdf />
        </IconContext.Provider>
        CV en Anglès
      </Button>
    </div>
  );
};

export default CVButtons;

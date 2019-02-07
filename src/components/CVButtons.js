import React from "react";
import { Button, Header } from "semantic-ui-react";
import { IconContext } from "react-icons";
import { FaFilePdf } from "react-icons/fa";

import MyCV_CAT from "../img/OriolCastroArnau_CV[CAT].pdf";
import MyCV_ENG from "../img/OriolCastroArnau_CV[ENG].pdf";

const CVButtons = () => (
  <div style={{ margin: "calc(2rem - .14285714em) 0 1rem" }}>
    <Header as="h4">Descarrega el meu Curriculum Vitae</Header>
    <Button
      primary
      href={MyCV_CAT}
      download
      style={{ marginRight: "8px" }}
      onClick={() =>
        gtag("event", "cv button", {
          event_category: "interacció",
          event_label: "cv català"
        })
      }
    >
      <IconContext.Provider
        value={{
          style: {
            verticalAlign: "text-top",
            marginRight: "8px"
          },
          size: "1.15em"
        }}
      >
        <FaFilePdf />
      </IconContext.Provider>
      CV en Català
    </Button>
    <Button
      primary
      href={MyCV_ENG}
      download
      onClick={() =>
        gtag("event", "cv button", {
          event_category: "interacció",
          event_label: "cv anglès"
        })
      }
    >
      <IconContext.Provider
        value={{
          style: {
            verticalAlign: "text-top",
            marginRight: "8px"
          },
          size: "1.15em"
        }}
      >
        <FaFilePdf />
      </IconContext.Provider>
      CV en Anglès
    </Button>
  </div>
);

export default CVButtons;

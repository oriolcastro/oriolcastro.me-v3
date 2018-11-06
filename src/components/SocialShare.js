import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";
import { Header } from "semantic-ui-react";

const SocialShare = props => {
  return (
    <>
      <Header as="h4">Comparteix l'article:</Header>
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "36px" }}
      >
        <FacebookShareButton quote={props.title} url={props.url}>
          <FacebookIcon round size={36} />
        </FacebookShareButton>
        <TwitterShareButton
          title={props.title}
          hastags={props.tags}
          via="Oriolcastro_"
          url={props.url}
        >
          <TwitterIcon round size={36} />
        </TwitterShareButton>
        <WhatsappShareButton title={props.title} url={props.url}>
          <WhatsappIcon round size={36} />
        </WhatsappShareButton>
        <EmailShareButton
          subject={`Mira aquest article interessant - ${props.title}`}
          url={props.url}
        >
          <EmailIcon round size={36} />{" "}
        </EmailShareButton>
      </div>
    </>
  );
};

export default SocialShare;

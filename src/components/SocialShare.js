import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import { Header } from 'semantic-ui-react';

const SocialShare = ({ title, url, tags }) => {
  return (
    <>
      <Header as="h4">Comparteix l{'&apos;'}article:</Header>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '36px' }}>
        <FacebookShareButton quote={title} url={url}>
          <FacebookIcon round size={36} />
        </FacebookShareButton>
        <TwitterShareButton title={title} hastags={tags} via="Oriolcastro_" url={url}>
          <TwitterIcon round size={36} />
        </TwitterShareButton>
        <WhatsappShareButton title={title} url={url}>
          <WhatsappIcon round size={36} />
        </WhatsappShareButton>
        <EmailShareButton subject={`Mira aquest article interessant - ${title}`} url={url}>
          <EmailIcon round size={36} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default SocialShare;

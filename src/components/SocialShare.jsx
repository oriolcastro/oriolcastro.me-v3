/** @jsx jsx */
import React, { useCallback } from 'react';
import { FaShare } from 'react-icons/fa';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import { Flex, Heading, IconButton, jsx } from 'theme-ui';

const SocialShare = ({ title, url, tags }) => {
  const hasNativeShare = typeof window !== 'undefined' && navigator.share;
  const handleShare = useCallback(() => {
    if (hasNativeShare) {
      navigator.share({
        title,
        text: 'Take a look to this article',
        url,
      });
    }
  }, [title, url, hasNativeShare]);

  return (
    <React.Fragment>
      <Heading as="h4" sx={{ mb: 3 }}>
        Share this post
      </Heading>
      <Flex sx={{ marginBottom: 5, width: ['100%', '33%'], justifyContent: 'space-around' }}>
        {hasNativeShare ? (
          <IconButton onClick={handleShare}>
            <FaShare />
          </IconButton>
        ) : (
          <React.Fragment>
            <FacebookShareButton quote={title} url={url}>
              <FacebookIcon round size={36} />
            </FacebookShareButton>
            <TwitterShareButton title={title} hastags={tags} via="Oriolcastro_" url={url}>
              <TwitterIcon round size={36} />
            </TwitterShareButton>
            <LinkedinShareButton title={title} url={url}>
              <LinkedinIcon round size={36} />
            </LinkedinShareButton>
            <WhatsappShareButton title={title} url={url}>
              <WhatsappIcon round size={36} />
            </WhatsappShareButton>
            <TelegramShareButton title={title} url={url}>
              <TelegramIcon round size={36} />
            </TelegramShareButton>
          </React.Fragment>
        )}
      </Flex>
    </React.Fragment>
  );
};

export default SocialShare;

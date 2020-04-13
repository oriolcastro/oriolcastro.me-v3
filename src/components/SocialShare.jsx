/** @jsx jsx */
import { useCallback } from 'react';
import { FaShareAlt } from 'react-icons/fa';

import { Button, Flex, jsx } from 'theme-ui';

const SocialShare = ({ title, url }) => {
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

  if (!hasNativeShare) return null;
  return (
    <Flex sx={{ marginBottom: 5, justifyContent: 'center' }}>
      <Button variant="secondary" onClick={handleShare}>
        <FaShareAlt sx={{ verticalAlign: 'text-top', fontSize: '1.25rem', mr: 2 }} />
        Share this post
      </Button>
    </Flex>
  );
};

export default SocialShare;

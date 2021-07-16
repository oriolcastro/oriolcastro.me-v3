import React, { useCallback } from 'react';
import { FaShareAlt } from 'react-icons/fa';

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
    <div className="flex mb-8 justify-center">
      <button
        type="button"
        className="bg-text text-cardBackground rounded-lg border-solid border border-transparent cursor-pointer hover:opacity-70"
        onClick={handleShare}
      >
        <FaShareAlt className="align-text-top text-xl mr-2" />
        Share this post
      </button>
    </div>
  );
};

export default SocialShare;

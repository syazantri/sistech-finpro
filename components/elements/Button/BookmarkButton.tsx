import React from 'react';
import Image from 'next/image';

interface BookmarkButtonProps {
  isBookmark: boolean;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ isBookmark }) => {
  return (
    <button className={`bookmark-button ${isBookmark ? 'bookmarked' : ''}`}>
      
      {isBookmark ? <Image src="/images/IsBookmark=True.png" alt="bookmarked" width="33" height="33" /> : <Image src="/images/IsBookmark=False.png" alt="bookmark" width="33" height="33" /> }
    </button>
  );
};

export default BookmarkButton;

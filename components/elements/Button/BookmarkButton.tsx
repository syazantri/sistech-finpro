import React from 'react';

interface BookmarkButtonProps {
  isBookmark: boolean;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ isBookmark }) => {
  return (
    <button className={`bookmark-button ${isBookmark ? 'bookmarked' : ''}`}>
      {isBookmark ? 'Bookmarked' : 'Bookmark'}
    </button>
  );
};

export default BookmarkButton;

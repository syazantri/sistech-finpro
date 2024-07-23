import React, { useState } from "react";

const BookmarkButton = () => {
  const [isBookmark, setIsBookmark] = useState(false);

  const handleClick = () => {
    setIsBookmark(!isBookmark);
  };

  return (
    <button onClick={handleClick}>
      <img
        src={
          isBookmark
            ? "/images/IsBookmark=True.png"
            : "/images/IsBookmark=False.png"
        }
        alt="Bookmark Button"
      />
    </button>
  );
};

export default BookmarkButton;
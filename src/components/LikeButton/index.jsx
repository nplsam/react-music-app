import React, { useState } from 'react'

function LikeButton() {
    const [liked, setLiked] = useState(false);
  
    const toggleLike = () => {
      setLiked(prevLiked => !prevLiked);
    };
  
    return (
      <button id="like-btn" onClick={toggleLike}>
        {liked ? '❤️' : '♡'}
      </button>
    );
  }

export default LikeButton
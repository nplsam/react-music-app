import React, { useState } from 'react'
import './App.css'

function likeButton() {
  const [like, setLike] = useState("Like")

  const handleLikedButton = () => {
    setLike(previous => "Unlike")
  }

  const handleUnlikedButton = () => {
    setLike(previous => "Like")
  }

  const handleButton = () => {
    if (like === "Like") {
      handleLikedButton()
    } else {
      handleUnlikedButton()
    }
  }

  return (
    <>
    <button id="like-btn"
      onClick={handleButton}
    >{like}</button>
    </>
  )
}




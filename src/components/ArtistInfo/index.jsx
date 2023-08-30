import React from 'react'

function ArtistInfo({ name, musicType, introduction }) {
    return (
      <div className="artist-info">
        <h1>{name}</h1>
        <p>Genre: {musicType}</p>
        <p>{introduction}</p>
      </div>
    );
  }

export default ArtistInfo
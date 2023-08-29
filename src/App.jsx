import React, { useState } from 'react'
import './App.css'

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

const nujabesData = {
  name: 'Nujabes',
  musicType: 'Chillhop / Jazz-Hop',
  introduction: 'Jun Seba, better known by his stage name Nujabes, was a Japanese record producer, DJ, composer, and arranger. He is renowned for his unique blend of hip-hop and jazz influences in his music.',
  songs: [
    { name: 'Feather', releaseDate: '2003', coverArt: 'https://i1.sndcdn.com/artworks-hUmiSLY9mwWC2ni3-0ZJPwA-t500x500.jpg' },
    { name: 'Aruarian Dance', releaseDate: '2001', coverArt: 'https://i1.sndcdn.com/artworks-McD80meEq7vw8YwU-ZQt8Yw-t500x500.png' },
  ],
  albums: [
    { name: 'Modal Soul', releaseDate: '2005', coverArt: 'https://lastfm.freetls.fastly.net/i/u/ar0/e605e0031a208775b7ac76f8c34290e3.jpg' },
    { name: 'Metaphorical Music', releaseDate: '2003', coverArt: 'https://morrowrecords.com/cdn/shop/products/nujabesmetaphorical.jpg?v=1641335650' },
  ],
};

function ArtistInfo({ name, musicType, introduction }) {
  return (
    <div className="artist-info">
      <h1>{name}</h1>
      <p>Music Type: {musicType}</p>
      <p>{introduction}</p>
    </div>
  );
}

function List({ items, type }) {
  return (
    <div className="item-list">
      <h2>{type}</h2>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <img src={item.coverArt} alt={item.name} />
            <div className="item-content">
              <h3>{item.name}</h3>
              <p>Release Date: {item.releaseDate}</p>
            </div>
            <span id="right">  <LikeButton /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <ArtistInfo
        name={nujabesData.name}
        musicType={nujabesData.musicType}
        introduction={nujabesData.introduction}
      />
      <List items={nujabesData.songs} type="Popular Songs" />
      <List items={nujabesData.albums} type="Albums" />
    </div>
  );
}

export default App;
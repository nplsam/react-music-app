import React, { useState } from 'react'
import './App.css'
import NewsletterSignupForm from './Newsletter'


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
  musicType: 'Lo-fi Hip Hop / Jazz',
  introduction: 'Jun Seba, better known by his stage name Nujabes, was a Japanese record producer, DJ, composer, and arranger. He is renowned for his unique blend of hip-hop and jazz influences in his music.',
  songs: [
    { name: 'Feather', releaseDate: '2003', coverArt: 'https://i1.sndcdn.com/artworks-hUmiSLY9mwWC2ni3-0ZJPwA-t500x500.jpg' },
    { name: 'Aruarian Dance', releaseDate: '2001', coverArt: 'https://i1.sndcdn.com/artworks-McD80meEq7vw8YwU-ZQt8Yw-t500x500.png' },
    { name: 'Lady Brown', releaseDate: '2003', coverArt: 'https://i.discogs.com/m-VRyqUDMor9mMTQqmePa1IZuaVEYhXx9gn7DWvJacc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NjYz/OC0xNjE5NzYwNTI3/LTM3NDkuanBlZw.jpeg' },
    { name: 'Reflection Eternal', releaseDate: '2005', coverArt: 'https://e.snmc.io/i/1200/s/9f7a41cac744e01315683f4712398c5a/5893059' },
    { name: 'Flowers', releaseDate: '2005', coverArt: 'https://i1.sndcdn.com/artworks-000138129528-o54cx0-t500x500.jpg' },
    { name: 'Kumomi', releaseDate: '2003', coverArt: 'https://e.snmc.io/i/1200/s/74ef95b3510723c71336b830b3c5cc40/6350819' },
    { name: 'World\'s End Rhapsody', releaseDate: '2003', coverArt: 'https://i1.sndcdn.com/artworks-000216083573-rugi32-t500x500.jpg' },

  ],
  albums: [
    { name: 'Modal Soul', releaseDate: '2005', coverArt: 'https://lastfm.freetls.fastly.net/i/u/ar0/e605e0031a208775b7ac76f8c34290e3.jpg' },
    { name: 'Metaphorical Music', releaseDate: '2003', coverArt: 'https://lastfm.freetls.fastly.net/i/u/500x500/d0923aa8b7a3fbb2d9b456306750c083.jpg' },
    { name: 'Spiritual State', releaseDate: '2011', coverArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Nujabes-spiritual-state.jpg/220px-Nujabes-spiritual-state.jpg' },
  ],
};

function ArtistInfo({ name, musicType, introduction }) {
  return (
    <div className="artist-info">
      <h1>{name}</h1>
      <p>Genre: {musicType}</p>
      <p>{introduction}</p>
    </div>
  );
}

function List({ items, type }) {
  return (
    <div className="item-list">
      <h2>{type}</h2>
      <ul className="horizontal-list">
        {items.map(item => (
          <li key={item.name} className="horizontal-list-item">
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
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${mode}-mode`}>
      <button className="mode-toggle" onClick={toggleMode}>
        {mode === 'light' ? '🌙' : '🌞'}
      </button>
      <ArtistInfo
        name={nujabesData.name}
        musicType={nujabesData.musicType}
        introduction={nujabesData.introduction}
      />
      <List items={nujabesData.songs} type="Top Songs" />
      <List items={nujabesData.albums} type="Albums" />
      <NewsletterSignupForm />
    </div>
  );
}

export default App;
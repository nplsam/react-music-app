import React from 'react'
import LikeButton from '../LikeButton';

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

export default List
import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard.js';
import axios from 'axios';

const Gallery = ({ imgList }) => {
  const [displayLarge, setDisplayLarge] = useState(false);

  const changeDisplay = () => {
    setDisplayLarge(!displayLarge);
  };
  return (
    <>
      <i
        className={`fas fa-${displayLarge ? 'square' : 'th-large'} size-button`}
        onClick={changeDisplay}
      />
      <div className={`gallery ${displayLarge && 'large'}`}>
        {imgList.map(src => (
          <ArtCard displayLarge={displayLarge} src={src} />
        ))}
      </div>
    </>
  );
};

export default Gallery;

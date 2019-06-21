import React, { useState } from 'react';
import ArtCard from './ArtCard.js';

const Gallery = () => {
  const list = [];
  for (let i = 0; i < 25; i++) {
    list.push(i);
  }
  const [displayLarge, setDisplayLarge] = useState(true);
  const changeDisplay = () => {
    setDisplayLarge(!displayLarge);
  };
  const sizeButtonClass = 'fas fa-th-large size-button';
  return (
    <>
      <i
        className={`fas fa-${displayLarge ? 'square' : 'th-large'} size-button`}
        onClick={changeDisplay}
      />
      <div className='gallery'>
        {list.map(() => (
          <ArtCard displayLarge={displayLarge} />
        ))}
      </div>
    </>
  );
};

export default Gallery;

import React from 'react';

const ArtCard = ({ displayLarge, src }) => {
  return (
    <div className={`art ${displayLarge && 'large'}`}>
      <img src={src} />
    </div>
  );
};

export default ArtCard;

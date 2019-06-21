import React from 'react';

const ArtCard = ({ displayLarge }) => {
  return (
    <div className={`art ${displayLarge && 'large'}`}>
      <img src='https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
    </div>
  );
};

export default ArtCard;

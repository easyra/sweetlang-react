import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard.js';
import axios from 'axios';

const Gallery = () => {
  const [imgList, setImgList] = useState([]);
  const [displayLarge, setDisplayLarge] = useState(false);
  const changeDisplay = () => {
    setDisplayLarge(!displayLarge);
  };
  useEffect(() => {
    axios
      .get('https://www.instagram.com/langston_alimayu/?__a=1')
      .then(({ data }) => {
        const posts = data.graphql.user.edge_owner_to_timeline_media.edges;
        const img = [];
        for (let i = 0; i < posts.length; i++) {
          img.push(posts[i].node.display_url);
        }
        setImgList(img);
      });
  }, []);
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

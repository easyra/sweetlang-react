import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import Footer from './Footer';

const LandingPage = () => {
  const [imgList, setImgList] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      {!loading ? (
        <div className='landing'>
          <Gallery imgList={imgList} />
          <Footer />
        </div>
      ) : (
        <div className='loading'>
          <i class='fas fa-circle-notch fa-spin fa-7x' />
        </div>
      )}
    </>
  );
};

export default LandingPage;

import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import SideBar from './component/SideBar.js';
import ArtCard from './component/ArtCard.js';
import Gallery from './component/Gallery.js';

function App() {
  return (
    <>
      <SideBar />
      <div className='landing'>
        <Gallery />
        <footer>
          <h4>Follow Me Here</h4>
          <div className='links'>
            <a href='https://www.instagram.com/langston_alimayu/'>
              <i class='fab fa-instagram fa-3x' />
            </a>
            <a href='https://langle.bandcamp.com/'>
              <i class='fab fa-bandcamp fa-3x' />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

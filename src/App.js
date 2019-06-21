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
      </div>
    </>
  );
}

export default App;

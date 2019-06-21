import React, { useState } from 'react';

const SideBar = () => {
  const [titleList, setTitleList] = useState([
    '',
    'bandcamp.com/sweetlang',
    'sweetlang@gmail.com',
    'instagram.com/sweetlang'
  ]);
  const [activeTitle, setActiveTitle] = useState(0);
  const setTitle = ({ target }) => {
    setActiveTitle(target.id);
  };
  return (
    <div className='sidebar'>
      <div className='text'>
        <h1>Sweet Lang</h1>
        <h2>Abstract LA Art</h2>
        <div className='links'>
          <div className='link' id='1' onMouseEnter={setTitle}>
            <i class='fab fa-bandcamp fa-2x' />
          </div>
          <div className='link' id='2' onMouseEnter={setTitle}>
            <i class='far fa-envelope fa-2x' />
          </div>
          <div className='link' id='3' onMouseEnter={setTitle}>
            <i class='fab fa-instagram fa-2x' />
          </div>
        </div>
        <a href={titleList[activeTitle]}>{titleList[activeTitle]}</a>
      </div>
    </div>
  );
};

export default SideBar;

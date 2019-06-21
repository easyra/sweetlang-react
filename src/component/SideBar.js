import React, { useState } from 'react';
import Link from './Link';

const SideBar = () => {
  const [titleList, setTitleList] = useState([
    '',
    'langle.bandcamp.com',
    // 'sweetlang@gmail.com',
    'instagram.com/langston_alimayu'
  ]);

  const [activeTitle, setActiveTitle] = useState(0);
  const setTitle = ({ target }) => {
    setActiveTitle(target.id);
  };
  const linkList = [
    { id: 1, className: 'fab fa-bandcamp fa-2x', type: 'bandcamp' },
    // { id: 2, className: 'far fa-envelope fa-2x', type: 'email' },
    { id: 2, className: 'fab fa-instagram fa-2x', type: 'instagram' }
  ];
  let aTagClass = '';
  if (activeTitle == 1) {
    aTagClass = 'bandcamp';
  }
  if (activeTitle == 2) {
    aTagClass = 'instagram';
  }
  return (
    <div className='sidebar'>
      <div className='text'>
        <h1>Sweet Lang</h1>
        <h2>Abstract LA Art</h2>
        <div className='links'>
          {linkList.map(({ id, className, type }) => (
            <Link
              url={`https://${titleList[activeTitle]}`}
              className={className}
              id={id}
              key={id}
              setTitle={setTitle}
              type={type}
              activeTitle={activeTitle}
            />
          ))}
        </div>
        <a
          target='blank_'
          href={`https://${titleList[activeTitle]}`}
          className={aTagClass}
        >
          {titleList[activeTitle]}
        </a>
      </div>
    </div>
  );
};

export default SideBar;

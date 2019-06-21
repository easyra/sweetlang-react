import React from 'react';

const Link = ({ setTitle, id, className, type, activeTitle, url }) => {
  return (
    <a
      className={`link ${activeTitle == id && type}`}
      target='_blank'
      href={`${url}`}
    >
      <i className={className} id={id} onMouseEnter={setTitle} />
    </a>
  );
};

export default Link;

import React from 'react';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='sidebar'>
      <div className='text'>
        <h1>Sweet Lang</h1>
        <h2>Abstract LA Art</h2>
      </div>
      <div className='cta'>
        {/* <h3>Follow Me</h3> */}
        <div className='link'>
          <i class='fab fa-instagram fa-2x' />
          <h3>instagram.com/sweetlang</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

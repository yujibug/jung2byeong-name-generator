import React, { useRef, useState } from 'react';

function Generator() {
  const firstName = useRef();

  function 할당() {
    firstName.current.innerHTML = '참회하는';
  }

  return (
    <div>
      <button onClick={할당}>생성</button>
      <div className='generator-name-container'>
        <h4 className='name-first' ref={firstName}>
          불멸의
        </h4>
        <h4 className='name-second'>심판자</h4>
        <h4 className='name-user'>기오</h4>
      </div>
    </div>
  );
}

export default Generator;

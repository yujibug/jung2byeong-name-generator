import React, { useEffect, useRef } from 'react';

function Result(props) {
  const firstName = useRef();
  const secondName = useRef();
  const userName = useRef();

  useEffect(() => {
    userName.current.innerHTML = props.name;
    firstName.current.innerHTML = props.firstResult;
    secondName.current.innerHTML = props.secondResult;
  });

  return (
    <>
      <h4 className='name-first' ref={firstName}></h4>
      <h4 className='name-second' ref={secondName}></h4>
      <h4 className='name-user' ref={userName}></h4>
    </>
  );
}

export default Result;

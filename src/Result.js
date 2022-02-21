import React, { useEffect, useRef } from 'react';

function Result(props) {
  const firstName = useRef();
  const secondName = useRef();
  const userName = useRef();

  useEffect(() => {
    props.setSlideSwitch(true);
  }, []);

  useEffect(() => {
    userName.current.innerHTML = props.name;
    firstName.current.innerHTML = props.firstResult;
    secondName.current.innerHTML = props.secondResult;
  });

  return (
    <div className='result-wrapper'>
      <p>&#60;니놈의&#62; &#60;이명&#62;은</p>
      <p>
        &#60;<span ref={firstName}></span> <span ref={secondName}></span>{' '}
        <span ref={userName}></span>&#62;
      </p>
    </div>
  );
}

export default Result;

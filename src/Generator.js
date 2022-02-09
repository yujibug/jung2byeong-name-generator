import React, { useRef } from 'react';

function Generator(props) {
  const firstName = useRef();
  const secondName = useRef();
  const userName = useRef();
  const firstNameData = props.data.firstNames;
  const secondNameData = props.data.secondNames;

  function randomNumberGenerator(data) {
    const randomNumber = Math.random() * data.length;
    return randomNumber;
  }

  function randomNameGenerator(name, data) {
    name.current.innerHTML = data[Math.floor(randomNumberGenerator(data))];
  }

  function nameInserter(name) {
    name.current.innerHTML = props.name;
  }

  function btnEvent() {
    if (props.name === '') {
      return;
    }
    randomNameGenerator(firstName, firstNameData);
    randomNameGenerator(secondName, secondNameData);
    nameInserter(userName);
  }

  return (
    <div>
      <button onClick={btnEvent}>생성</button>
      <div className='generator-name-container'>
        <h4 className='name-first' ref={firstName}></h4>
        <h4 className='name-second' ref={secondName}></h4>
        <h4 className='name-user' ref={userName}></h4>
      </div>
    </div>
  );
}

export default Generator;

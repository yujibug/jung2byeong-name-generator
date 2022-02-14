import React, { useRef } from 'react';

function Generator(props) {
  const inputName = useRef();
  const firstNameData = props.data.firstNames;
  const secondNameData = props.data.secondNames;

  function randomNumberGenerator(data) {
    const randomNumber = Math.random() * data.length;
    return randomNumber;
  }

  function randomNameGenerator(setResult, data) {
    setResult(data[Math.floor(randomNumberGenerator(data))]);
  }

  function btnEvent() {
    if (inputName.current.value === '') {
      return;
    }

    props.setName(inputName.current.value);
    randomNameGenerator(props.setFirstResult, firstNameData);
    randomNameGenerator(props.setSecondResult, secondNameData);
    props.setGenerateBtnActive(true);
  }

  return (
    <>
      <input
        type='text'
        placeholder='이름을 넣어주세요'
        className='input-name'
        ref={inputName}
      />
      <button onClick={btnEvent}>생성</button>
    </>
  );
}

export default Generator;

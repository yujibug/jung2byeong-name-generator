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

  function opyToClipBoard() {
    let copyText =
      '크큭..나의 이명은 ' +
      '<' +
      props.firstResult +
      ' ' +
      props.secondResult +
      ' ' +
      props.name +
      '>' +
      ' #중2병이름생성기';

    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = copyText;

    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('복사했습니다!');
  }

  return (
    <div
      className={
        'result-wrapper' +
        (props.slideSwitch === true ? ' background-opacity' : '')
      }
    >
      <div className='result-textArea' onClick={opyToClipBoard}>
        <p>&#60;니놈의&#62; &#60;이명&#62;은</p>
        <p>
          &#60;<span ref={firstName}></span> <span ref={secondName}></span>{' '}
          <span ref={userName}></span>&#62;
        </p>
      </div>
    </div>
  );
}

export default Result;

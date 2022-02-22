import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Generator from './Generator';
import Result from './Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

function App() {
  let [data, setData] = useState('');
  let [firstResult, setFirstResult] = useState('');
  let [secondResult, setSecondResult] = useState('');
  let [generateBtnActive, setGenerateBtnActive] = useState(false);
  let [slideSwitch, setSlideSwitch] = useState(false);

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/yujibug/d8acc6491116cac0a7ac6893189781d0/raw/2e4e2928ba17f3e1df51bb58bef03aca0980e0f3/nameData.json'
      ) //
      .then((response) => {
        setData(response.data);
      })
      .catch(console.log);
  }, []);

  let [name, setName] = useState('');

  function twitterShare() {
    let sendText =
      '크큭..나의 이명은 ' +
      '<' +
      firstResult +
      ' ' +
      secondResult +
      ' ' +
      name +
      '>';
    let sendUrl = 'yujibug.github.io/jung2';
    let sendHashTag = '중2병이름생성기';
    window.open(
      'https://twitter.com/intent/tweet?text=' +
        sendText +
        '&hashtags=' +
        sendHashTag +
        '&url=' +
        sendUrl
    );
  }

  return (
    <div className='App'>
      <div className='background'>
        <div
          className={
            'title-generator-container' +
            (slideSwitch === true ? ' slide-up' : '')
          }
        >
          <div className='main-title-wrapper'>
            <h1 className='title'>중2병 이름</h1>
            <h1 className='title'>생성기</h1>
          </div>
          <div className='main-generator-container'>
            <Generator
              data={data}
              setFirstResult={setFirstResult}
              setSecondResult={setSecondResult}
              setGenerateBtnActive={setGenerateBtnActive}
              setName={setName}
            ></Generator>
          </div>
        </div>

        {generateBtnActive === true ? (
          <div className='main-result-container'>
            <Result
              name={name}
              firstResult={firstResult}
              secondResult={secondResult}
              setSlideSwitch={setSlideSwitch}
              slideSwitch={slideSwitch}
            ></Result>
            <div className='tweetBtn-wrapper'>
              <FontAwesomeIcon
                className='tweetBtn'
                icon={brands('twitter')}
                onClick={twitterShare}
              />
              <p className='tweetBtnText' onClick={twitterShare}>
                tweet
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

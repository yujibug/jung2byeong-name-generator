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

  return (
    <div className='App'>
      <div className='background'>
        <div className='main-container'>
          <div className='main-title-wrapper'>
            <h1 className='title'>중2병 이름 생성기</h1>
          </div>
          <div className='main-generator-wrapper'>
            <Generator
              data={data}
              setFirstResult={setFirstResult}
              setSecondResult={setSecondResult}
              setGenerateBtnActive={setGenerateBtnActive}
              setName={setName}
            ></Generator>
          </div>
          <div className='main-result-container'>
            {generateBtnActive === true ? (
              <Result
                name={name}
                firstResult={firstResult}
                secondResult={secondResult}
              ></Result>
            ) : null}
            <FontAwesomeIcon icon={brands('twitter-square')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

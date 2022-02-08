import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Inputter from './Inputter';
import Generator from './Generator';

function App() {
  let [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/yujibug/d8acc6491116cac0a7ac6893189781d0/raw/8eb8f5e895f2824a3a67a7d7d0a2e13cd16ac3d4/nameData.json'
      ) //
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        console.log(data);
      })
      .catch(console.log);
  }, []);

  let [name, setName] = useState('초기값');
  let [btnEvent, setBtnEvent] = useState();

  return (
    <div className='App'>
      <div className='container'>
        <h2 className='title'>중2병 이름 생성기</h2>
        <Inputter name={name} setName={setName}></Inputter>
        <Generator></Generator>
      </div>
    </div>
  );
}

export default App;

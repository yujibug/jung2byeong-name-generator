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
      <div className='container'>
        <h2 className='title'>중2병 이름 생성기</h2>
        <Inputter name={name} setName={setName}></Inputter>
        <Generator data={data} name={name}></Generator>
      </div>
    </div>
  );
}

export default App;

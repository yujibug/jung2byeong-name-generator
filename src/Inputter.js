import React, { useEffect, useRef, useState } from 'react';

function Inputter(props) {
  return (
    <div className='inputter-container'>
      <input
        type='text'
        placeholder='이름을 넣어주세요'
        className='input-name'
        onChange={(e) => {
          props.setName(e.target.value);
          console.log(props.name);
        }}
      />
    </div>
  );
}

export default Inputter;

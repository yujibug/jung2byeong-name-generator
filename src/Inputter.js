import React from 'react';

function Inputter(props) {
  return (
    <div className='inputter-container'>
      <input
        type='text'
        placeholder='이름을 넣어주세요'
        className='input-name'
        onChange={(e) => {
          props.setName(e.target.value);
        }}
      />
    </div>
  );
}

export default Inputter;

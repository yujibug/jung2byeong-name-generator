import React, { useRef, useState } from 'react';
import Inputter from './Inputter';
import Generator from './Generator';

function Content(props) {
  return (
    <div>
      <Inputter></Inputter>
      <Generator></Generator>
    </div>
  );
}

export default Content;

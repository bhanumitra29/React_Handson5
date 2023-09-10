import React, { useState } from 'react';
import "../App.css"
const HOCData = (props) => {
  const [isGreen, setIsGreen] = useState(false);

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  const textColor = isGreen ? 'green' : 'black';

  return (
    <div>
      <h2>{props.newdata}</h2>
      <h2 style={{ color: textColor }}>Color Change</h2>
      <button className='button' onClick={toggleColor}>Change</button>
    </div>
  );
};

export default HOCData;

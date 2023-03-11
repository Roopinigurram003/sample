import React, { useState } from 'react';

const Sumvalues = () => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [result, setResult] = useState(0);

  const handleVal1Change = (event) => {
    setVal1(Number(event.target.value));
  };

  const handleVal2Change = (event) => {
    setVal2(Number(event.target.value));
  };

  const handleSumClick = () => {
    setResult(val1 + val2);
  };

  return (
    <div>
      <label>Enter the first text box value:</label>
      <input type="text" value={val1} onChange={handleVal1Change} />
      <br></br>
      <label>Enter the second text box value:</label>
      <input type="text" value={val2} onChange={handleVal2Change} />
      <br></br>
      <button onClick={handleSumClick}>Sum</button>
      <p>Sum of two values: {result}</p>
    </div>
  );
};

export default Sumvalues;

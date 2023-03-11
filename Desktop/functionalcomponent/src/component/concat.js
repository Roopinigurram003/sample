import React, { useState } from 'react';

function Concat() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [concatenated, setConcatenated] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const concatenatedString = text1 + " " + text2  + " " + text3 + " " + text4 + " " + text5;
    setConcatenated(concatenatedString);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text1} onChange={(event) => setText1(event.target.value)}  />
        <input type="text" value={text2} onChange={(event) => setText2(event.target.value)}  />
        <input type="text" value={text3} onChange={(event) => setText3(event.target.value)}  />
        <input type="text" value={text4} onChange={(event) => setText4(event.target.value)}  />
        <input type="text" value={text5} onChange={(event) => setText5(event.target.value)}  />
        <button type="submit">Submit</button>
      </form>
      {concatenated && <p>{concatenated}</p>}
    </div>
  );
}

export default Concat;

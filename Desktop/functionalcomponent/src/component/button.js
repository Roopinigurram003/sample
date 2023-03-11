import React from 'react';

function Hello(props) {
  let handleClick = () => {
    alert(`${props.name} clicked the button`);
  };

  return (
    <div>
      <h1>Welcome {props.name} to function Component</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Hello;
// import React, { useState } from 'react';

// function ButtonCounter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     alert(`Button clicked ${count + 1} times`);
//   };

//   return (
//     <div>
//       <form>
//         <label htmlFor="countclicks">Number of clicks:</label>
//         <input type="text" id="countclicks" name="countclicks" value={count} readOnly />

//         <button type="button" onClick={handleClick} onMouseUp={() => alert('Button released')}>
//           Click me
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ButtonCounter;
import React, { useState } from 'react';

function ButtonCounter() {
const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);
alert(`Button clicked ${count + 1} times`);
};

const handleMouseUp = (event) => {
event.preventDefault();
};  

return (
<div>
<form>
<label htmlFor="countclicks">Number of clicks:</label>
<input type="text" id="countclicks" name="countclicks" value={count} readOnly />

    <button type="button" onClick={handleClick} onMouseUp={handleMouseUp}>
      Click me
    </button>
  </form>
</div>
);
}

export default ButtonCounter;


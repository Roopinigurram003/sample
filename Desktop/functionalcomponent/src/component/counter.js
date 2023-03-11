import React from "react";

const HandleClick = () => {
  const handleClick = (event) => {
    console.log("clicked");
    event.preventDefault();
  }
 

  return (
    <div onClick={handleClick}>
      <form onClick={handleClick}>
        <button onClick={handleClick}>Click Me</button>
      </form>
    </div>
  );
};

export default HandleClick;





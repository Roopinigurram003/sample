import React from 'react';
const changetitle = () =>{
    let changetitlename = () =>{
        console.log('clicked')
        document.title("Hello world");
    }
    return(
        <div>
            <button onClick={changetitlename}>click to change</button>
        </div>
    )
}
export default changetitle;
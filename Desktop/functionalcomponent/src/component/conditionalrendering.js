// import React from 'react';
// const faculty = () =>{
//    return(
//     <div>
//         <h1>Welcome to faculty !!!!!</h1>
//     </div>
//    );
// };
// const conditionalrendering = (props) =>{
//     if props.compname == 'student'
//     return <student/>
//     else
//     return <faculty/>

// };
// export default conditionalrendering;
import React from 'react';
const Faculty = () =>{
       return(
        <div>
            <h1>Welcome to faculty !!!!!</h1>
        </div>
       );
    };
const ConditionalRendering = (props) => {
  if (props.compname === 'student') {
    return <Student />;
  } else {
    return <Faculty />;
  }
};

export default ConditionalRendering;

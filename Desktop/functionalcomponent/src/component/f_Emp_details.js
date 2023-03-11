import React from 'react';
const Emp_details = (props)=>{
    return(
        <div>
            <h1 style={{textAlign:'left' ,padding:10}} >Employee details</h1>
            <p style={{textAlign:'left',padding:10}}>Employee Name:{props.name}</p>
            <p style={{textAlign:'left',padding:10}}>Employee age:{props.age}</p>
            <p style={{textAlign:'left',padding:10}}>Years of Experience:{props.experience}</p>
            <p style={{textAlign:'left',padding:10}}>Phone Number:{props.number}</p>

        </div>
    )
}
export default Emp_details;


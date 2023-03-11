// import React ,{useState} from 'react'
// const class_example=()=>{
//     return(
//         <form>
//             <div >
//               <input></input>
//             </div>
//         </form>
//     )
// }
// export default class_example;
import React, { useState } from 'react';

function Def() {
  const [textboxes, setTextboxes] = useState([{ id: 1, value1: '', value2: '' }]);
  const [table, setTable] = useState(null);

  const addMore = () => {
    setTextboxes([...textboxes, { id: textboxes.length + 1, value1: textboxes[0].value1, value2: textboxes[0].value2 }]);
  };

  const handleChange = (id, name, value) => {
    const newTextBoxes = textboxes.map((textbox) => {
      if (textbox.id === id) {
        return { ...textbox, [name]: value };
      }
      return textbox;
    });
    setTextboxes(newTextBoxes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textboxes);
    const rows = textboxes.map((textbox) => {
      return (
        <tr key={textbox.id}>
          <td>{textbox.value1}</td>
          <td>{textbox.value2}</td>
        </tr>
      );
    });
    const newTable = (
      <table>
        <thead>
          <tr>
            <th>Value 1</th>
            <th>Value 2</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
    setTable(newTable);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {textboxes.map((textbox) => (
          <div key={textbox.id}>
            <input
              type="text"
              value={textbox.value1}
              onChange={(e) => handleChange(textbox.id, 'value1', e.target.value)}
            />
            <input
              type="text"
              value={textbox.value2}
              onChange={(e) => handleChange(textbox.id, 'value2', e.target.value)}
            />
          </div>
        ))}
        <button onClick={addMore}>Add More</button>
        <button type="submit">Submit</button>
      </form>
      {table} 
    </div>
  );
}

export default Def;
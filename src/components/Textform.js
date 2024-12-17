
import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event) =>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text,setText]=useState('Enter text here');
  return (
  <div>
    <h1>{props.heading}</h1>
       <div className="mb-3">
         <label for="myBox" class="form-label">example</label>
         <textarea className="form-control" value={text} onchange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className='btn.btn.primary' onClick={handleUpClick}>Convert to upperCase</button>
  </div>
  )
}

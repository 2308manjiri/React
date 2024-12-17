import React, { useState } from 'react'

export default function Textform2(props) {
    const handledUpClick=()=>{
        console.log("upper case" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }

        const handledUpClick1=()=>{
            console.log("lower case" + text);
            let newText= text.toLowerCase();
            setText(newText)
    
        }
        const handledUpClick2=()=>{
            let newText= '';
            setText(newText)
    
        }
        const handledUpClick3=()=>{
            var text=document.getElementById("MyBox")
            text.select();
            navigator.clipboard.writeText(text.value)
    
        }
    
    const handledOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const[text, setText]=useState('enter text here');
    return (
        <>
    <div className="container" style = {{color:props.mode==='dark'?'white':'0#42743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3"/>
        <label form="MyBox" className="control-label">Example</label>
        <textarea className="form-control" value={text} onChange={handledOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'0#42743',color:props.mode==='dark'?'white':'0#42743' }} id="MyBox" rows="3"></textarea>
        <br></br>
        <button type="button" class="btn btn-primary mx-2" onClick={handledUpClick}>convert to upper case</button>
        <button type="button" class="btn btn-primary mx-2" onClick={handledUpClick1}>convert to lower case</button>
        <button type="button" class="btn btn-primary mx-2" onClick={handledUpClick2}>clear text</button>
        <button type="button" class="btn btn-primary mx-2" onClick={handledUpClick3}>copy text</button>
        
       </div>
       <div className="container my-4" style = {{color:props.mode==='dark'?'white':'0#42743' }}>
        <h1> Your Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing to preview here"}</p>

       </div>
       </>
  )
}

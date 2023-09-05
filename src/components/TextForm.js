import React, {useState} from 'react'

export default function TextForm(props) {
  const handleupclick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const handleloclick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleupchange = (event)=>{
    setText(event.target.value);
  }

  const handlecopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const extraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))

  }
   
  const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'light'}} onChange={handleupchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={extraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
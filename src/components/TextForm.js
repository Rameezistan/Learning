import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupclick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleloclick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase", "success")

  }
  const handleupchange = (event)=>{
    setText(event.target.value);
  }

  const handlecopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")

  }

  const extraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra spaces removed", "success")

  }
   
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder='Enter Text here' value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleupchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={extraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
  )
}
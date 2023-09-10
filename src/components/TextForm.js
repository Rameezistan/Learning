import React, { useState } from 'react'


export default function TextForm(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase", "success")

  }
  const handleupchange = (event) => {
    setText(event.target.value);
  }

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success")

  }
  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra spaces removed", "success")

  }

  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }} onChange={handleupchange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to Preview"}</p>

      </div>
    </>
  )
}
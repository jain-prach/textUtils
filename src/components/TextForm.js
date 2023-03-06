import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState("");

  return (
    <div  className= {`text-${props.mode === "light"?"black":"light"}`}>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="FormControlTextarea1" className="form-label">Paste your text below</label>
                <textarea className="form-control" rows="8" id = "myBox" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className={`btn btn-${props.mode  === "light"?"dark":"light"}`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode  === "light"?"dark":"light"} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.mode === "light"?"dark":"light"}`} onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-5">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words {text.length} characters (Counting the last space as word)</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
        </div>
        <div className="container my-5">
            <h3>Text Preview</h3>
            <p>{text.length>0?text:"Enter your text in the above area to preview"}</p>
        </div>
    </div>
  )
}

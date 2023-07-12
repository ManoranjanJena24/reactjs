import React, { useState } from 'react'

export default function TextForm(props) {
    //credit to A
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[]+/);
        setText(newText.join(" "))
    }

    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        let newtext = text.toUpperCase();

        setText(newtext)
    }
    const handlelowerclick = () => {
        let newtext = text.toLowerCase();

        setText(newtext)
    }
    const handleClearclick = () => {
        let newtext = '';

        setText(newtext)
    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [text, setText] = useState("Entering one text");

    return (
        <>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <div>

                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button className="btn btn-danger mx-4" onClick={handlelowerclick}>Convert To LowerCase</button>
                    <button className="btn btn-success " onClick={handleClearclick}>Clear Text</button>
                    <button className="btn btn-success mx-4 " onClick={speak}>Speak The Given Paragraph</button>
                    <button className="btn btn-success " onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-success mx-2 " onClick={handleExtraSpaces}>Remove Extra Spacing</button>

                </div>
            </div>
            <div className="container my-300 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in Textbox above to preview it"}</p>
            </div>


        </>

    )
}

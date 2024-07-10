import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       //console.log("Uppercase was clicked" + text);
       let newText= text.toUpperCase();
       setText(newText)
       props.showAlert("converted to uppercase!", "Success")
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase(); 
        setText(newText)
        props.showAlert("converted to Lowercase!", "Success")
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText= ''; 
        setText(newText)
        props.showAlert("All cleared", "Success")
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space removed", "Success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to ClipBoard!", "succes"); 
    }

    const handleTranslation = () => {
        navigator.clipboard.translator.lang("pt")

    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'? 'white': 'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className='form-Control col-12' style={{backgroundColor: props.mode === 'dark'? '#13466e': 'white', color:props.mode === 'dark'? 'white': 'black' }} value={text} onChange={handleOnChange} id='mybox' rows= '10' ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3"  onClick={handleLoClick}>Convert to lowwercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3"  onClick={handleClearClick}>Clear All</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-3" onClick={handleCopy}>Copy Text</button>
            {/*<button disabled={text.length===0} className="btn btn-primary mx-1  my-3" onClick={handleTranslation}>Translation</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-1  my-3" onClick={handleExtraSpaces}>Extra space</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'? 'white': 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to perview"}</p>
        </div>
        </>
    );
};
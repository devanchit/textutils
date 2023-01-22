import React, {useState} from "react";



export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = ()=>{
   // console.log("Uppercase clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.showalert("converted to upper case","success");
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase clicked");
     let newText= text.toLowerCase();
     setText(newText);
     props.showalert("converted to lower case","success");
   }

   const handleclearClick = ()=>{
    // console.log("Uppercase clicked");
     let newText= '';
     setText(newText);
   }

  const handleOnChange = (event)=>{
  //  console.log("OnChange clicked");
    setText(event.target.value);
  }

  return (
  <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1> {props.heading} </h1>
        <div className="mb-3">
          
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}
           style={{backgroundColor: props.mode==='dark'?'#534f4f':'white',color: props.mode==='dark'?'white':'black'}} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>clear text</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h2>Text Summary</h2>
     <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p> Time to read = {text.split(" ").length * 0.008} </p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>




  </>
  );
}

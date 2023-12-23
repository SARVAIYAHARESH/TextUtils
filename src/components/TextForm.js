import React, { useState } from "react";

export default function TextForm(props) {
  const uphandeler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert To UpperCase","success");
  };
  const lohandeler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert To LowerCase","success");

  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Area Is Clear","success");

  };
  const copy =()=>{
    var text = document.getElementById("TextBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copy In ClipBoard","success");
  }
  const extraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Remove","success");

  }
  const change = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your Text Here");

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="TextBox"
          rows="8"
          value={text}
          onChange={change}
          style={{
            backgroundColor: props.mode === "dark" ? "#010537d1" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={uphandeler}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={lohandeler}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={clear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={copy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-3 my-3" disabled={text.length===0} onClick={extraSpace}>
        Remove Extra Space
      </button>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Word And {text.length} Character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} MIN Time To Read </p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Preview</h2>
        <p>{text.length>0?text:" Nothing To Preview"}</p>
      </div>
    </>
  );
} 

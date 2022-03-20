import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked:"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked:"+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked:"+ text);
    let newText = "";
    setText(newText);
    props.showAlert("text cleared!","success");
  };
  // const handleReverseClick = () => {
  //   // console.log("Uppercase was clicked:"+ text);
  //   let strArr = text.split("");
  //   strArr = strArr.reverse();
  //   let newText = strArr.join("");
  //   setText(newText);
  // };
  // const capitalfirstletter = () => {
  //   // console.log("Uppercase was clicked:"+ text);
  //   let words = text.split("");
  //   let uppercaseword = "";
  //   words.forEach((element) => {
  //     uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + "";
  //   });
  //   setText(uppercaseword);
  // };
  // const handleSentanClick = () => {
  //   // console.log("Uppercase was clicked:"+ text);
  //   let newText = text.charAt(0).toUpperCase() + text.slice(1);
  //   setText(newText);
  // };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard","success");
    
  
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed!","success");
  };

  const [text, setText] = useState("");
  //text="new text";  //wrong way to change the state
  // setText("new text"); // correct way to change the stAte
  return (
    <>
      <div className="container"style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",color:props.mode === "dark" ? "white" : "#042743"
            }}
            id="mybox"
            rows={8}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={capitalfirstletter}>
          Capital Text
        </button> */}
        {/* <button className="btn btn-primary mx-1" onClick={handleSentanClick}>
          Sentance Text
        </button> */}
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3"style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2>Your Text Summery</h2>
        <p>
          {text.split("").length} Words And {text.length} Characters
        </p>
        <p>{0.008 * text.split("").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something  In The Textbox To Preview It Here"}</p>
      </div>
    </>
  );
}

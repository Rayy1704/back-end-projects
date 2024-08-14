import React from "react";
import ReactDOM from "react-dom";
function removeText(){
  document.getElementsByClassName("placeholder").innerHTML=""
}
ReactDOM.render(
  <div>
    <h1>Text Editer</h1>
    <p onClick="removeText()" contentEditable="true" spellCheck="false" className="placeholder" style ={{color:"rgba(202, 202, 202, 0.871)",}}>Enter your text here</p>    
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
var yourName="Rayyan Salman"
var date = new Date;
var year = date.getFullYear();
ReactDOM.render(
  <div>
    <p>created by {yourName}.</p>
    <p>Copyright {year}</p>    
  </div>,
  document.getElementById("root")
);

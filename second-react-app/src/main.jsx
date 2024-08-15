import React from "react";
import ReactDOM from "react-dom";
const hour = new Date().getHours();
let greeting ;
let color ;
if(hour>=12&&hour<18){
  greeting="Good Evening";
  color="Green"
}
else if(hour>=18&&hour<24){
  greeting="Good Night";
  color="Blue";
}
else if(hour>=24&&hour<12){
  greeting = "Good Morning";
  color = "red"
}
ReactDOM.render(
  <h1 className="heading" style ={{color:color}}>{greeting}</h1>,document.getElementById("root")
)


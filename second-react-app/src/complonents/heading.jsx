import React from "react";


function Heading(){
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
    const HeadingColor ={color:color}
    return <h1 className="heading" style ={HeadingColor}>{greeting}</h1>;
}

export default Heading;
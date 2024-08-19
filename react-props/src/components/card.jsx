import React from "react";
import Img from "./avatar";
import Details from "./details";
function Card(prop) {
  return (
    
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <Img src ={prop.src}/>
        </div>
        <div className="bottom">
          <Details pn={prop.pn} email={prop.email}/>
        </div>
      </div>
  );
}

export default Card;

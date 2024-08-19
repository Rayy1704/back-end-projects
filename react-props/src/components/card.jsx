import React from "react";
import Img from "./avatar";
function Card(prop) {
  return (
    
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <Img src ={prop.src}/>
        </div>
        <div className="bottom">
          <p className="info">{prop.pn}</p>
          <p className="info">{prop.email}</p>
        </div>
      </div>
  );
}

export default Card;

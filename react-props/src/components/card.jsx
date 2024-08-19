import React from "react";

function Card(prop) {
  return (
    
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img
            src={prop.src}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{prop.pn}</p>
          <p className="info">{prop.email}</p>
        </div>
      </div>
  );
}

export default Card;

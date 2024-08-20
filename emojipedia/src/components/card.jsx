import React from "react";

function Card(prop){
return (
    <div>
        <h2 className="emoji">{prop.emoji}</h2>
        <dt>{prop.name}</dt>
        <dd>{prop.meaning}</dd>
    </div>
)
}

export default Card;
import React from "react";

function Card(prop){
return (
    <div>
        <dt className="emoji">{prop.emoji}</dt>
        <dt>{prop.name}</dt>
        <dd>{prop.meaning}</dd>
    </div>
)
}

export default Card;
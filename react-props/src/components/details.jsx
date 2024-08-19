import React from "react";
function Details(prop){
    return(
        <div>
            <p className="info">{prop.pn}</p>
            <p className="info">{prop.email}</p>
        </div>
    );
}
export default Details;
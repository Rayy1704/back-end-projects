import React from "react";
function footer(){
    const year = new Date().getFullYear();
    return <p>Copyright @ {year}</p>;
}

export default footer;
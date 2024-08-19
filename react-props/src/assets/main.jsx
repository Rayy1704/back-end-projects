import React from "react";
import ReactDOM from "react-dom/client";
import Card from "../card";

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
    <Card name ="John" description ="really chill guy"/>
    <Card name ="Paul" description ="not really a chill guy"/>
    </div>
)
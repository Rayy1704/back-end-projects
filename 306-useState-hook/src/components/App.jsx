import React from "react";
import Increment from "./+button";
import Decrement from "./-button";
let [count,setcount]=React.useState(0);
function App() {

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>+</button>
    </div>
  );
}

export default App;

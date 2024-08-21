import React from "react";
import Increment from "./+button";
import Decrement from "./-button";
function App() {
  let [count,setcount]=React.useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Increment(count,setcount)}>+</button>
      <button onClick={Decrement(count,setcount)}>-</button>
    </div>
  );
}

export default App;

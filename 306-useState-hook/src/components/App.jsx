import React from "react";

function App() {

  let [count,setCount]=React.useState(0);
  let inStock=11;
  function Increment(){
    count<inStock && setCount(count+1);
  }
  function Decrement(){
    count>0 && setCount(count-1);
  }
  
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default App;

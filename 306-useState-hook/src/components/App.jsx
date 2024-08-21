import React from "react";

function App() {

  function Increment(count,setCount){
    setCount(++count);
  }
  function Decrement(count,setCount){
    setCount(--count);
  }


  let [count,setCount]=React.useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Increment(count,setCount)}>+</button>
      <button onClick={Decrement(count,setCount)}>-</button>
    </div>
  );
}

export default App;

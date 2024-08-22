import React,{useState} from "react";

function App() {
  const [isHovered,setHovered] = useState(false);
  const [headingText,setHeading]= useState("Hello")
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?"/>
      <button onClick={()=>{setHeading("Submitted")}} style = {{backgroundColor:(isHovered?'black':'white'),}} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>Submit</button>
    </div>
  );
}

export default App;

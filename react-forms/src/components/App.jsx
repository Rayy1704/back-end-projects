import React,{useState} from "react";

function App() {
  const [isHovered,setHovered] = useState(false);
  const [headingText,setHeading]= useState("Hello");
  const [name,setName]=useState("");
  function handleChange(event){
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input 
        className ="nameBox" 
        type="text" 
        placeholder="What's your name?" 
        onChange ={handleChange}
      />
      <button 
        onClick={()=>{setHeading(`Hello, ${name}`)}} 
        style = {{backgroundColor:(isHovered?'black':'white'),}} 
        onMouseEnter={()=>{setHovered(true)}} 
        onMouseLeave={()=>{setHovered(false)}}
      >Submit</button>
    </div>
  );
}

export default App;

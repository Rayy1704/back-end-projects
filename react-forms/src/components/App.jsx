import React,{useState} from "react";

function App() {
  const [isHovered,setHovered] = useState(false);
  const [fName,setFName]=useState("");
  const [lName,setLName]=useState("");

  function updateFName(event){
    setFName(event.target.value);
  }
  function updateLName(event){
    setLName(event.target.value);
  }


  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input 
          name = "fName" 
          placeholder="First Name"
          onChange={updateFName}
        ></input>
        <input 
          name = "lName" 
          placeholder="Last Name"
          onChange={updateLName}
        ></input>
        <button
          onMouseEnter={()=>{setHovered(true)}}
          onMouseLeave={()=>{setHovered(false)}}
          style={{
            backgroundColor:(isHovered&&"black")
          }}
          
        >Submit</button>
      </form>
    </div>
  );
}

export default App;

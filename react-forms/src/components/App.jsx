import React,{useState} from "react";

function App() {
  const [isHovered,setHovered] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function updateFullName(event){
    let newValue=event.target.value;
    setFullName(prev=>{
      if(event.target.name==="fName"){
        return {
          fName:newValue
          ,lName:prev.lName
        }
      }else if(event.target.name==="lName")
        return {
          fName:prev.fName
          ,lName:newValue
        }
    })
  }


  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name = "fName" 
          placeholder="First Name"
          onChange={updateFullName}
          value={fullName.fName}
        ></input>
        <input 
          name = "lName" 
          placeholder="Last Name"
          onChange={updateFullName}
          value={fullName.lName}
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

import React,{useState} from "react";

function App() {
  const [isHovered,setHovered] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function updateFullName(event){
    const {value,name}=event.target;
    setFullName(prev=>{
      if(name==="fName"){
        return {
          fName:value
          ,lName:prev.lName
        }
      }else if(name==="lName")
        return {
          fName:prev.fName
          ,lName:value
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

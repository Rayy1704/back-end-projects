import React,{useState} from "react";

function App() {
  const [isHovered,setHovered] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email:""
  });

  function updateFullName(event){
    const {value,name}=event.target;
    setContact(prev=>{
      if(name==="fName"){
        return {
          fName:value
          ,lName:prev.lName,
          email:prev.email
        }
      }else if(name==="lName"){
        return {
          fName:prev.fName
          ,lName:value
          ,email:prev.email
        }
      }else if(name==="email"){
        return {
          fName:prev.fName
          ,lName:prev.lName,
          email:value
        }
      }
    })
  }


  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <form>
        <input 
          name = "fName" 
          placeholder="First Name"
          onChange={updateFullName}
          value={contact.fName}
        ></input>
        <input 
          name = "lName" 
          placeholder="Last Name"
          onChange={updateFullName}
          value={contact.lName}
        ></input>
        <input 
          name = "email" 
          placeholder="Email"
          onChange={updateFullName}
          value={contact.email}
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

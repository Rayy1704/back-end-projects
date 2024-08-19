import React from "react";
import Card from "./card"; 
import contacts from "../contacts"; 

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((i) => (
        <Card 
          key={i.id} 
          name={i.name} 
          src={i.imgURL} 
          pn={i.phone} 
          email={i.email} 
        />
      ))}
    </div>
  );
}

export default App;

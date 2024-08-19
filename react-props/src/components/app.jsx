import React from "react";
import Card from "./card"; 
import contacts from "../contacts"; 
import Avatar from "./avatar";

function createCard(contact){
  return<Card key={contact.id} name={contact.name} src={contact.imgURL} pn={contact.phone} email={contact.email}/>
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src = "https://media.licdn.com/dms/image/v2/D4D03AQF5e-9Ge1WVyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722952271199?e=1729728000&v=beta&t=XSFSj3V6Kt-5ENYflKO2u418SqnyrTO0GfJP-tpSOb8"/>
      {contacts.map((contact) => (
        createCard(contact)
      ))}
    </div>
  );
}

export default App;

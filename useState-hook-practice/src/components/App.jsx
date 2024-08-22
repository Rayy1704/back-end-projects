import React from "react";
function getTime(){
  return new Date().toLocaleTimeString().slice(0,-2);
}
function App() {
  let [time,setTime] = React.useState(getTime()) ;
  function displayTime(){
    setTime(getTime());
  }
  setInterval(displayTime,1000);
  return (
    <div >
      <h1>{time}</h1>
    </div>
  );
}

export default App;

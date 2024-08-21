import React from "react";
function getTime(){
  return new Date().toLocaleTimeString().substring(0,7);
}
function App() {
  let [time,setTime] = React.useState(getTime()) ;
  function displayTime(){
    setTime(getTime());
  }
  setInterval(displayTime,1000);
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;

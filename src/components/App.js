import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [visibility, setVisibility] = useState(false)

  function handleVisibility() {
    setVisibility(prev => !prev)
  }
  
  return (
    <div className="App" id="main">
      <p id="para" className={visibility? "show":"hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleVisibility}>{visibility?"show":"hide"}</button>
    </div>
  );
}

export default App

import "./App.css";
import React, { useState } from "react";

function App() {
  const [theNumber, setTheNumber] = useState(0);
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);

  const getTheNumber = () => {
    const myNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    setTheNumber(myNumber);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>PICK YOUR RANGE</h2>
        <div className="numContainer">
          <div>
            <p className="descriptor">MINIMUM</p>
            <input
              className="input"
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(+e.target.value)}
            />
          </div>
          <div>
            <p className="descriptor">MAXIMUM</p>
            <input
              className="input"
              type="number"
              value={maxNumber}
              onChange={(e) => setMaxNumber(+e.target.value)}
            />
          </div>
        </div>

        <div className="randomNum">
          <h1>YOUR NUMBER IS</h1>
          <h1>{theNumber}</h1>
        </div>
        <button onClick={getTheNumber}>GET A NUMBER</button>
      </div>
    </div>
  );
}

export default App;

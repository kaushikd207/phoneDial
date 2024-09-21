import React, { useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [isCalling, setIsCalling] = useState(false);

  const handleButtonClick = (value) => {
    if (input.length < 10) {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleDial = () => {
    if (input.length === 10) {
      setIsCalling(true);
    }
  };

  const handleCancel = () => {
    setIsCalling(false);
    setInput("");
  };

  return (
    <div className="app">
      {!isCalling ? (
        <div className="dial-pad">
          <div className="input-container">
            <input
              type="text"
              value={input}
              readOnly
              placeholder="Enter Phone Number"
              className="input-box"
            />
            <div className="actions">
              <button className="backspace-button" onClick={handleBackspace}>
                x
              </button>
              <button
                className="dial-button"
                onClick={handleDial}
                disabled={input.length !== 10}
              >
                Dial
              </button>
            </div>
          </div>
          <div className="buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((value) => (
              <button
                key={value}
                className="keyBtn"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="calling-screen">
          <h1 className="calling-text">Calling...</h1>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

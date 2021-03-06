import React, { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{
          backgroundColor: buttonColor,
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        role="checkbox"
        id="enable-button-checkbox"
        aria-checked={disabled}
        onClick={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;

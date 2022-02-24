import React, { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isEnabled, setIsEnabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{
          backgroundColor: buttonColor,
        }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isEnabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        role="checkbox"
        onClick={() => setIsEnabled(!isEnabled)}
      />
    </div>
  );
}

export default App;

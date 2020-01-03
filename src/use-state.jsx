import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <HookSwitch />
    </div>
  );
};

const HookSwitch = () => {
  const [color, setColor] = useState("white");
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{ padding: 10, backgroundColor: color, fontSize: `${fontSize}px` }}
    >
      hello
      <button
        onClick={() => {
          setColor("white");
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setColor("black");
        }}
      >
        Dark
      </button>
      <button onClick={() => setFontSize(s => s + 2)}>+</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

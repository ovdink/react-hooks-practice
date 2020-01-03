import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <>
        <button
          onClick={() => {
            setValue(val => val + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          hide
        </button>
        <HookCounter value={value} />
      </>
    );
  }
  return <button onClick={() => setVisible(true)}>show</button>;
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("Use effect");
    return () => {
      console.log("clear");
    };
  }, [value]);

  return <p>{value}</p>;
};

ReactDOM.render(<App />, document.getElementById("root"));

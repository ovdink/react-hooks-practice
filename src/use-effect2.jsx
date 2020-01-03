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
        {/* <HookCounter value={value} /> */}
        <Notification />
      </>
    );
  }
  return <button onClick={() => setVisible(true)}>show</button>;
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);
  useEffect(() => {
    console.log("update");
  }, [value]);

  return <p>{value}</p>;
};

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return <> {visible && <p>Hello</p>}</>;
};

ReactDOM.render(<App />, document.getElementById("root"));

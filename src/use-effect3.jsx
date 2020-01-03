import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(1);
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
        <PlanetInfo id={value} />
      </>
    );
  }
  return <button onClick={() => setVisible(true)}>show</button>;
};

const PlanetInfo = ({ id }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch(`http://swapi.co/api/planets/${id}`)
      .then(res => res.json())
      .then(data => {
        !cancelled && setName(data.name);
      })
      .catch(err => console.warn(err));
    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <p>
      {id} - {name}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

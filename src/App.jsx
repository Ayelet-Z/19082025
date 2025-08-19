import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  function slowFunction(num) {
    console.log("calling slow function");
    for (let i = 0; i < 2000000000; i++) {}
    return num * 2;
  }

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setDark((prev) => !prev);
          }}
        >
          Change theme
        </button>
      </div>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default App;

import { useState } from "react";

function Colour() {
  const [colour, setColour] = useState("black");
  function handelColour() {
    setColour((prevColour) => (prevColour === "black" ? "red" : "black"));
  }
  return (
    <div className="App">
      <div style={{ width: 100, height: 100, background: colour }} />
      <button onClick={handelColour}>Click Me</button>
    </div>
  );
}

export default Colour;

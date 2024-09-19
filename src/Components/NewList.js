import React, { useState } from "react";
import "./style.css";
function NewList() {
  const [inputNum, setInputNum] = useState("");
  const [numberLists, setNumberList] = useState([]);

  function addNumber() {
    const number = parseInt(inputNum);
    if (!isNaN(number)) {
      setNumberList((prevNumbers) =>
        [...prevNumbers, number].sort((a, b) => a - b)
      );
      setInputNum(""); // Clear input
    }
  }
  return (
    <div className="App">
      <lable> Number</lable>
      <br />
      <input
        type="number"
        name="number"
        value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
      />
      <button onClick={addNumber}>AddNumber</button>

      <ul>
        {numberLists.length > 0 &&
          numberLists.map((lists, index) => {
            return (
              <li key={index} className={lists % 2 === 0 ? "even" : "odd"}>
                {lists}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default NewList;

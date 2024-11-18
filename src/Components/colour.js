import { useState } from "react";

function Colour() {
  const [colour, setColour] = useState("black");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handelColour() {
    setColour((prevColour) => {
      prevColour === "black" ? "red" : "black";
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div style={{ width: 100, height: 100, background: colour }} />
      <button onClick={handelColour}>Click Me</button>

      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Colour;

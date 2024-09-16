import "./App.css";
import Navbar from "../src/Components/Navbar";
import Colour from "../src/Components/colour";
// import HomeSection from "./Components/HomeSection";
// import TodoList from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomeSection />
      <TodoList /> */}
      <Colour />
    </div>
  );
}

export default App;

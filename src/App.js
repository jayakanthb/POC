import "./App.css";
import Navbar from "../src/Components/Navbar";
// import Colour from "../src/Components/colour";
// import HomeSection from "./Components/HomeSection";
// import TodoList from "./Components/Todo";
import NewList from "./Components/NewList";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomeSection />
      <TodoList />
      <Colour /> */}
      <NewList />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "../src/Components/Navbar";
// import HomeSection from "./Components/HomeSection";
import TodoList from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomeSection /> */}
      <TodoList />
    </div>
  );
}

export default App;

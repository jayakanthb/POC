import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [activityList, setActivityList] = useState([]);

  function addActivity() {
    setActivityList((prevList) => {
      const updatedList = [...prevList, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    setActivityList((prev) => {
      const update = prev.filter((_, index) => index !== i);
      return update;
    });
  }

  function removeAll() {
    setActivityList([]);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="todo-input"
          placeholder="Enter a new activity"
        />
        <button onClick={addActivity} className="add-button">
          Add Activity
        </button>
      </div>

      <p className="info-text">View the list data here</p>
      {activityList.length > 0 ? (
        <div className="todo-list">
          {activityList.map((data, i) => (
            <div key={i} className="todo-item">
              <div className="todo-text">{data}</div>
              <button
                onClick={() => removeActivity(i)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
          <button onClick={removeAll} className="remove-all-button">
            Remove All
          </button>
        </div>
      ) : (
        <p className="empty-list">Your Todo list is empty</p>
      )}
    </div>
  );
}

export default TodoList;

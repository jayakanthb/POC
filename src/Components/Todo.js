import { useState } from "react";

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
    <div className="App">
      <h1 className="m-4">Todo List App</h1>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>Add Activity</button>

      <p>View the list data here</p>
      {activityList.length > 0 &&
        activityList.map((data, i) => (
          <div key={i}>
            <div>{data}</div>
            <button onClick={() => removeActivity(i)}>Remove</button>
          </div>
        ))}
      {activityList.length > 0 && (
        <button onClick={removeAll}>removeAll</button>
      )}
    </div>
  );
}

export default TodoList;

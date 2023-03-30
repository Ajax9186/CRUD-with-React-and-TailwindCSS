import React from "react";
import { useAppContext } from "../context/AppProvider";

function Task({ task }) {
  const { updateStates, deleteTask } = useAppContext();
  return (
    <div>
      <div>
        <h4>{task.name}</h4>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => updateStates(task.id)}>Update</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;

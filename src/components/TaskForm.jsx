import React from "react";
import { useAppContext } from "../context/AppProvider";

function TaskForm() {
  const { task, currentId, handleChange, handleSubmit } = useAppContext();
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter a name"
            value={task.name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter a description"
            value={task.description}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">{currentId ? "Edit" : "Create"}</button>
      </form>
    </div>
  );
}

export default TaskForm;

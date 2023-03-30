import React from "react";
import { useAppContext } from "../context/AppProvider";

function TaskForm() {
  const { task, currentId, handleChange, handleSubmit } = useAppContext();

  let bgColors;

  if (currentId) bgColors = "bg-blue-600 hover:bg-blue-500";
  else bgColors = "bg-red-600 hover:bg-red-500";

  return (
    <div className="mb-5 w-full">
      <form onSubmit={(e) => handleSubmit(e)} className="bg-white p-5 rounded">
        <label htmlFor="name" className="block mb-5 text-xl sm:text-2xl">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter a name"
            value={task.name}
            onChange={(e) => handleChange(e)}
            className="w-full border py-1 px-2 text-lg sm:text-xl text-gray-800 mt-0.5 shadow-sm rounded"
          />
        </label>
        <label htmlFor="description" className="block mb-5 text-xl sm:text-2xl">
          Description
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter a description"
            value={task.description}
            onChange={(e) => handleChange(e)}
            className="w-full border py-1 px-2 text-lg sm:text-xl text-gray-800 mt-0.5 shadow-sm rounded"
          />
        </label>
        <button
          type="submit"
          className={`w-full text-white p-2 rounded text-lg sm:text-xl ${bgColors} transition-colors`}
        >
          {currentId ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

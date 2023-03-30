import React from "react";
import { useAppContext } from "../context/AppProvider";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function Task({ task }) {
  const { updateStates, deleteTask } = useAppContext();
  return (
    <div className="flex justify-between mb-5 last-of-type:mb-0 items-center">
      <div className="text-lg sm:text-xl">
        <h4>{task.name}</h4>
        <p className="text-gray-800 mt-0.5">{task.description}</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => updateStates(task.id)}
          className="text-green-600 text-base sm:text-lg hover:text-green-500 transition-colors"
        >
          <FiEdit2 />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-600 text-base sm:text-lg ml-1 hover:text-red-500 transition-colors"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default Task;

import React from "react";
import { useAppContext } from "../context/AppProvider";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function Task({ task }) {
  const { updateStates, deleteTask } = useAppContext();
  return (
    <div className="last-of-type:mb-0 flex items-center justify-between p-5 mb-5 bg-white rounded">
      <div className="sm:text-xl text-lg">
        <h4>{task.name}</h4>
        <p className="text-gray-800 mt-0.5">{task.description}</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => updateStates(task.id)}
          className="sm:text-lg hover:text-green-500 text-base text-green-600 transition-colors"
        >
          <FiEdit2 />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="sm:text-lg hover:text-red-500 ml-1 text-base text-red-600 transition-colors"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default Task;

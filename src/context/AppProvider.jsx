import { React, createContext, useContext, useState, useEffect } from "react";

const url = "http://localhost:3000";

const AppContext = createContext();

const initialStateTask = { id: null, name: "", description: "" };

export function AppProvider({ children }) {
  const [task, setTask] = useState(initialStateTask);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${url}/tasks`);
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const createTask = async () => {
    try {
      await fetch(`${url}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateStates = (id) => {
    const currentTask = tasks.find((task) => task.id === id);
    setTask(currentTask);
    setCurrentId(id);
  };

  const editTask = async () => {
    try {
      await fetch(`${url}/tasks/${currentId}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) editTask();
    else createTask();
    setCurrentId(null);
    setTask(initialStateTask);
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${url}/tasks/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        task,
        currentId,
        loading,
        tasks,
        handleChange,
        handleSubmit,
        updateStates,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

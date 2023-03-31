import { React, createContext, useContext, useState, useEffect } from "react";

const url = "http://localhost:3000";

const AppContext = createContext();

const initialStateTask = { id: null, name: "", description: "" };
const initialStateAlert = { show: false, message: "", style: "" };

export function AppProvider({ children }) {
  const [task, setTask] = useState(initialStateTask);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [alert, setAlert] = useState(initialStateAlert);

  const showAlert = (show = false, message = "", style = "") => {
    setAlert({ show, message, style });
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${url}/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
      showAlert(true, "New task created", "green");
    } catch (error) {
      showAlert(true, error.message, "red");
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
      showAlert(true, "Task updated", "green");
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
      showAlert(true, "Deleted task", "red");
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
        alert,
        handleChange,
        handleSubmit,
        updateStates,
        deleteTask,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

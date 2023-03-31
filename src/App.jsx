import React from "react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Alert from "./components/Alert";
import { useAppContext } from "./context/AppProvider";

function App() {
  const { tasks, alert } = useAppContext();

  return (
    <div className="min-h-screen bg-black">
      <main>
        <section className="sm:px-7 flex items-center justify-center min-h-screen px-5">
          <div className="container max-w-md my-5">
            {alert.show && <Alert alert={alert} />}
            <TaskForm />
            {tasks.length > 0 && <TasksList />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

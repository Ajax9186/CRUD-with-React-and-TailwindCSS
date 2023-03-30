import React from "react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { useAppContext } from "./context/AppProvider";

function App() {
  const { tasks } = useAppContext();

  return (
    <div className="min-h-screen bg-black">
      <main>
        <section className="min-h-screen px-5 sm:px-7 flex justify-center items-center">
          <div className="container max-w-md">
            <TaskForm />
            {tasks.length > 0 && <TasksList />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

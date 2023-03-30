import React from "react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { useAppContext } from "./context/AppProvider";

function App() {
  const { tasks } = useAppContext();

  return (
    <div>
      <main>
        <section>
          <div>
            <TaskForm />
            {tasks.length > 0 && <TasksList />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { useAppContext } from "../context/AppProvider";
import Loading from "./Loading";
import Task from "./Task";

function TasksList() {
  const { loading, tasks } = useAppContext();

  if (loading) return <Loading />;

  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TasksList;

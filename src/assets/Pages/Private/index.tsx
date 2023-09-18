import React from "react";
import Header from "../../components/Header";
import Tasks from "../../components/Tasks";

export default function Private() {
  const [tasks, setTasks] = React.useState([]);

  function deleteTaskById() {}

  function toggleTaskCompletedById() {}
  return (
    <div className="">
      <Header />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  );
}

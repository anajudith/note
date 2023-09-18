import React from "react";
import { Task } from "../Task";

interface TasksProps {
  tasks: Task[];
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
}
interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  //   const tasksQuantity = tasks.length;
  //   const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="w-full max-w-screen-md mx-auto mt-16 px-4">
      <header className="flex items-center justify-between mb-24">
        <div className="flex items-center gap-8">
          <p className="text-blue-500 text-lg font-semibold">Created tasks</p>
          {/* <span>{tasksQuantity}</span> */}
          <span>18</span>
        </div>

        <div>
          <p className="text-lg font-semibold text-purple">Completed tasks</p>
          <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs font-semibold">
            {/* {completedTasks} of {tasksQuantity} */}
            {1} of {10}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-12">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}

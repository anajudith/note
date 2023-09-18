import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

interface TaskProps {
  task: {
    id: number;
    title: string;
    isCompleted: boolean;
  };
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className="w-full bg-gray-900 border border-gray-700 p-4 rounded-lg flex items-center justify-between gap-12">
      <button
        className="w-4 h-4 bg-transparent border-none"
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p
        className={
          task.isCompleted
            ? "text-gray line-through"
            : "text-xs leading-5 text-gray-200 mr-auto"
        }
      >
        {task.title}
      </p>

      <button
        className="bg-transparent border-none text-gray"
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}

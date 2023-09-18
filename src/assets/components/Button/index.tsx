import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Button() {
  const handleAddTask = () => {
    console.log("Esta chegando");
  };
  return (
    <button
      onClick={handleAddTask}
      className="h-full px-4 bg-blue-400 text-white border-none rounded-lg flex items-center gap-6 font-semibold text-base"
    >
      Create
      <AiOutlinePlusCircle size={20} />
    </button>
  );
}

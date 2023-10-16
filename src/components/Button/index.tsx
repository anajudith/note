import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Button() {
  const handleAddNote = () => {
    console.log("Esta chegando");
  };
  return (
    <button
      onClick={handleAddNote}
      className="h-[50px] w-[120px] px-4 bg-roxo border-[1px] border-slate-950 text-slate-900  rounded-lg flex items-center gap-2 font-semibold text-base"
    >
      Create
      <AiOutlinePlusCircle size={40} color="black" />
    </button>
  );
}

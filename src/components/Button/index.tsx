import { AiOutlinePlusCircle } from "react-icons/ai";
import { IProps } from "./Button.structure";

export default function Button({ onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className="h-[50px] w-[120px] px-4 bg-roxo border-[1px] border-slate-950 text-slate-900  rounded-lg flex items-center gap-2 font-semibold text-base"
    >
      Criar
      <AiOutlinePlusCircle size={30} color="black" />
    </button>
  );
}

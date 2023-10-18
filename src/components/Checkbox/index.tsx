import { IProps } from "./Checkbox.structure";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Checkbox({ onClick, isCompleted }: IProps) {
  return (
    <button className="w-[20px] h-full bg-none border-none" onClick={onClick}>
      {isCompleted ? (
        <BsFillCheckCircleFill />
      ) : (
        <div className="w-[20px] h-[20px] rounded-full border-2 border-blue" />
      )}
    </button>
  );
}

export default Checkbox;

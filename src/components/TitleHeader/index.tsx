import { Link } from "react-router-dom";
import { IProps } from "./TitleHeader.structure";

export default function TitleHeader({
  title,
  onClick,
  link,
  iconAfter,
  iconBefore,
}: IProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-full h-[40px] gap-3 bg-roxo justify-center flex items-center text-slate-950 rounded-md p-2"
    >
      {iconBefore}
      {link ? <Link to={link}>{title}</Link> : <span>{title}</span>}
      {iconAfter}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  onClick?: () => void;
  link?: string;
  iconAfter?: JSX.Element;
  iconBefore?: JSX.Element;
}

export default function TitleHeader({
  title,
  onClick,
  link,
  iconAfter,
  iconBefore,
}: IProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full h-[40px] gap-3 bg-roxo justify-center flex items-center text-slate-950 rounded-md p-2"
    >
      {iconBefore}
      {link ? <Link to={link}>{title}</Link> : <span>{title}</span>}
      {iconAfter}
    </div>
  );
}

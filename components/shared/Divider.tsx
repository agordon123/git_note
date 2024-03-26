import React from "react";
interface DividerProps {
  text?: string;
  className?: string;
}
const Divider = ({ text, className }: DividerProps) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <div className="h-[1px] w-full bg-[#55597D2A]"></div>
      {text && <span className="whitespace-nowrap text-white-300">{text}</span>}
      <div className="h-[1px] w-full bg-[#55597D2A]"></div>
    </div>
  );
};

export default Divider;

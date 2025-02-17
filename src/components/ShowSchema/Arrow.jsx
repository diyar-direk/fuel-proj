import { memo } from "react";

function Arrow({ borderStyle = "border-dashed" }) {
  return (
    <div
      className={`h-10 w-8 border-r-primary-main
     border-b-primary-main border-r-[2px] 
     border-b-[2px] ${borderStyle} rounded-br-xl
     relative mb-2 `}
    >
      <div className="absolute -left-[1px] -bottom-[1px] w-[2px] h-[11px] bg-primary-main origin-bottom-left rotate-45 rounded-lg "></div>
      <div className="absolute left-[0.5px] bottom-[0px] w-[2px] h-[11px] bg-primary-main origin-bottom-left rotate-[135deg] rounded-lg "></div>
    </div>
  );
}

export default memo(Arrow);

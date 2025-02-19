import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";
/**
 * @typedef utils
 * @property {"border-solid"|"border-dashed"|"border-dotted"} borderStyle
 */

/**
 * @typedef arrowProps
 * @type {React.HTMLAttributes<HTMLDivElement> & utils}
 */

/**
 * @param {arrowProps} props
 */
function Arrow({
  className,
  arrowHeight,
  borderStyle = "border-dashed",
  style = {},
  ...props
}) {
  const classNameMemo = useMemo(
    () =>
      twMerge(
        `w-8 border-r-primary-main
     border-b-primary-main border-r-[2px] 
     border-b-[2px] ${borderStyle} rounded-br-xl
     relative max-md:w-5`,
        className
      ),
    [className, borderStyle]
  );

  return (
    <div
      {...props}
      style={{ height: `${arrowHeight}px`, ...style }}
      className={classNameMemo}
    >
      <div className="absolute -left-[1px] -bottom-[1px] w-[2px] h-[11px] max-md:h-[8px] bg-primary-main origin-bottom-left rotate-45 rounded-lg "></div>
      <div className="absolute left-[0.5px] bottom-[0px] w-[2px] h-[11px] max-md:h-[8px] bg-primary-main origin-bottom-left rotate-[135deg] rounded-lg "></div>
    </div>
  );
}

export default memo(Arrow);

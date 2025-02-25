import { memo, useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @typedef borderStyle
 * @type {"border-solid"|"border-dashed"|"border-dotted"}
 */

/**
 * @typedef utils
 * @property {borderStyle} borderStyle
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
        `w-8 flex items-end
      ${borderStyle} rounded-br-xl
     relative max-md:w-5 -mr-[2px]`,
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
      <div
        style={{ height: `${arrowHeight}px` }}
        className={`border-primary-main  rounded-br-xl border-b-2 border-r-2 w-full ${borderStyle}`}
      ></div>

      <div className="absolute -left-[1px] bottom-[1px] w-[2px] h-[11px] max-md:h-[8px] bg-primary-main origin-bottom-left rotate-45 rounded-lg "></div>
      <div className="absolute left-[0px] bottom-[2px] w-[2px] h-[11px] max-md:h-[8px] bg-primary-main origin-bottom-left rotate-[135deg] rounded-lg "></div>
    </div>
  );
}

export default memo(Arrow);

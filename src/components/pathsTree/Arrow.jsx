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
      ${borderStyle} rtl:rounded-br-xl ltr:rounded-bl-xl
     relative max-md:w-5 rtl:-mr-[2px] ltr:-ml-[2px]`,
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
        className={`border-primary-main rtl:rounded-br-xl ltr:rounded-bl-xl border-b-2 rtl:border-r-2 ltr:border-l-2 w-full ${borderStyle}`}
      ></div>

      <div className="absolute rtl:-left-[1px] ltr:-right-[1px] bottom-[1px] w-[2px] h-[11px] max-md:h-[8px] bg-primary-main rtl:origin-bottom-left ltr:origin-bottom-right rtl:rotate-45 ltr:-rotate-45 rounded-lg "></div>
      <div className="absolute rtl:left-[0px] ltr:right-[0px] bottom-[2px] w-[2px] h-[11px] max-md:h-[8px] bg-primary-main rtl:origin-bottom-left ltr:origin-bottom-right rtl:rotate-[135deg] ltr:-rotate-[135deg] rounded-lg "></div>
    </div>
  );
}

export default memo(Arrow);
